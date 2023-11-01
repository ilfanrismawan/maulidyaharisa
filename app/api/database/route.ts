import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const POST = async (req: Request) => {
  //   const { title, content, image, slug } = { req };
  const post = await prisma.post.create({
    data: {
      title: "7 Tips Fashion Terkini untuk Tampil Stylish dan Elegan",
      content: "<h1>Service iPhone di Bandung</h1>",
      createdAt: new Date(),
      image: "/elegant.jpeg",
      slug: "7-tips-fashion-terkini-untuk-tampil-stylish-dan-elegan",
    },
    // data: {
    //   title: "Service iPhone di Bandung",
    //   content: "<h1>Service iPhone di Bandung</h1>",
    //   createdAt: new Date(),
    //   image: "/iphone.jpg",
    //   slug: "7-tips-fashion-terkini-untuk-tampil-stylish-dan-elegan",
    // },
  });
  return NextResponse.json(post);
};

export const GET = async () => {
  const get = await prisma.post.findMany();
  return NextResponse.json(get);
};
