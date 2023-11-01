import { postById } from "@/app/hook/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const defaultTitle = "Fashion Designer";
  const getPage = await postById(params.slug);
  const getTitle = await getPage?.title;
  const getDeskrip = await getPage?.content;
  const title = getTitle == null ? defaultTitle : getTitle;
  const deskrip = getDeskrip?.replace(/<[^>]*>/g, "").slice(0, 160);

  return {
    title: title + " - " + `Fashion Designer`,
    description: deskrip,
  };
};

const Slug = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = await postById(slug);
  const title = await post?.title;
  const content = await post?.content;
  const image = await post?.image;
  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div className="max-w-lg px-3 py-11">
        <div className="pb-2 text-center text-2xl font-black">
          <h1 className="text-center">{title}</h1>
        </div>
        <div className="flex items-center justify-center py-3">
          <Image
            alt={title}
            src={image}
            height={300}
            width={300}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex items-center justify-center">
          <Link
            href={`https://wa.me/6287763334006`}
            target="_blank"
            className="flex flex-row items-center justify-center gap-1 rounded-full bg-green-500 px-5 py-3 text-white hover:bg-green-400 active:bg-green-700"
          >
            <span>WhatsApp</span> <AiOutlineWhatsApp />
          </Link>
        </div>
        <div className="article flex flex-col items-start justify-start text-start">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default Slug;
