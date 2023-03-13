import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface MediaData {
  id: string;
  caption?: string;
  media_url: string;
}

const WorkExperienceSection = () => {
  const [mediaData, setMediaData] = useState<MediaData[]>([]);

  useEffect(() => {
    axios
      .get<{ data: MediaData[] }>(
        "https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJWcVd3NGdKaEdRMnVVdzB1ZAVdjelpvdVBmRV9WcnF6ekhQTFZALQjgtRHJielYxbkdjMFZAqaDRjRFcxajhmclRNTURUNWZAYNWxoc19JUUJwdVpaQ2RGUDk5S1F3QlRvbTNpZAVNtV0tGZAFhkTkFETwZDZD"
      )
      .then((response) => {
        setMediaData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(mediaData);
  return (
    <div className="flex flex-row ">
      {mediaData.map((media) => (
        <div
          className="grid grid-rows-2 items-center justify-center px-10 md:w-[30%] md:grid-rows-3"
          key={media.id}
        >
          <div className="">
            <img
              className=" w-full rounded-lg object-contain hover:brightness-90 active:brightness-75"
              src={media.media_url}
              alt={media.caption}
            />
          </div>
          <div>
            <p className="">{media.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceSection;
