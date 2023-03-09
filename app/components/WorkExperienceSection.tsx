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
        "https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJYYWNKWjhlZAG5IaXhDRlBfc0ljdlVxQUFyWWpGeE9WQ29vLVFzWXFua25PT19fVGNmdmlKdEVZANUVmNWhkS3k0bXliZAXFOS3d6VVZAjQjE2cEVyZAjF6ZAkkzUUlvTGpuei1hRjFxY2tPNHdlbm9QMAZDZD"
      )
      .then((response) => {
        setMediaData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-row ">
      {mediaData.map((media) => (
        <div
          className="grid w-[30%] grid-rows-3 items-center justify-center px-10 "
          key={media.id}
        >
          <div className="items-center justify-center">
            <img
              className="m-6 w-full rounded-lg object-contain hover:brightness-90 active:brightness-75"
              src={media.media_url}
              alt={media.caption}
            />
            <div className="w-2/3">
              <p>{media.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceSection;
