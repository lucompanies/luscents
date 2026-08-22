import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "preorders.json");

type PreorderPayload = {
  name: string;
  email: string;
  product: string;
  size: string;
  quantity: number;
  phone?: string;
  notes?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function readOrders() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as any[];
  } catch {
    return [];
  }
}

export async function POST(req: NextRequest) {
  let body: Partial<PreorderPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, product, size, quantity, phone, notes } = body;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!product || typeof product !== "string") {
    return NextResponse.json({ error: "Please select a scent." }, { status: 400 });
  }
  const qty = Number(quantity) || 1;
  if (qty < 1 || qty > 10) {
    return NextResponse.json({ error: "Quantity must be between 1 and 10." }, { status: 400 });
  }

  const order = {
    id: `LU-${Date.now().toString(36).toUpperCase()}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone?.trim() || null,
    product,
    size: size || "50ML / 1.7 FL.OZ",
    quantity: qty,
    notes: notes?.trim() || null,
    createdAt: new Date().toISOString()
  };

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const orders = await readOrders();
    orders.push(order);
    await fs.writeFile(DATA_FILE, JSON.stringify(orders, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to persist preorder", err);
    return NextResponse.json(
      { error: "Something went wrong saving your pre-order. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, orderId: order.id }, { status: 201 });
}

export async function GET() {
  const orders = await readOrders();
  return NextResponse.json({ count: orders.length });
}
