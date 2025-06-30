import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prismaDB";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { productSlug } = body;

  try {
    const reviews = await prisma.review.findMany({
      where: {
        AND: [
          {
            product: {
              slug: productSlug, // Correct relation-based filter
            },
          },
          {
            isApproved: true,
          },
        ],
      },
    });

    if (!reviews || reviews.length === 0) {
      return NextResponse.json(
        { message: "No reviews found" },
        { status: 200 }
      );
    }

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
