import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { clerkId, name, email } = await req.json();

    if (!email || !clerkId) {
      return NextResponse.json({ error: "Email and clerkId required" }, { status: 400 });
    }

    const existingUser = await db.select().from(usersTable).where(eq(usersTable.clerkId, clerkId));

    if (existingUser.length > 0) {
      const user = existingUser[0];
      
      // Reset credits for paid users if 30 days passed
      if (user.isPaid && user.lastCreditReset) {
        const lastReset = new Date(user.lastCreditReset);
        const now = new Date();
        const daysSinceReset = Math.floor((now.getTime() - lastReset.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysSinceReset >= 30) {
          const updated = await db
            .update(usersTable)
            .set({ credits: 25, lastCreditReset: now })
            .where(eq(usersTable.clerkId, clerkId))
            .returning();
          return NextResponse.json({ user: updated[0] });
        }
      }
      
      return NextResponse.json({ user });
    }

    const newUser = await db.insert(usersTable).values({ clerkId, name, email }).returning();

    return NextResponse.json({ user: newUser[0] }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { clerkId, action } = await req.json();

    if (!clerkId) {
      return NextResponse.json({ error: "clerkId required" }, { status: 400 });
    }

    const user = await db.select().from(usersTable).where(eq(usersTable.clerkId, clerkId));

    if (user.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Upgrade to paid
    if (action === "upgrade") {
      const updated = await db
        .update(usersTable)
        .set({ isPaid: true, credits: 25, lastCreditReset: new Date() })
        .where(eq(usersTable.clerkId, clerkId))
        .returning();
      return NextResponse.json({ user: updated[0] });
    }

    // Use credit
    if (action === "use") {
      if (user[0].credits <= 0) {
        return NextResponse.json({ error: "No credits available" }, { status: 403 });
      }

      const updated = await db
        .update(usersTable)
        .set({ credits: user[0].credits - 1 })
        .where(eq(usersTable.clerkId, clerkId))
        .returning();
      return NextResponse.json({ user: updated[0] });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const clerkId = searchParams.get("clerkId");

    if (!clerkId) {
      return NextResponse.json({ error: "clerkId required" }, { status: 400 });
    }

    const user = await db.select().from(usersTable).where(eq(usersTable.clerkId, clerkId));

    if (user.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user: user[0] });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}
