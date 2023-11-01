import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const GET = async (
  Request: Request,
  { params }: { params: { slug: string } }
) => {
  const slug = params.slug;
  const getdata = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });

  return NextResponse.json(getdata);
};
