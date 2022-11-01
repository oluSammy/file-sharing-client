import React from "react";
import { useNavigate } from "react-router-dom";
import { IImage } from "../pages/AllImages/AllImages";

type props = {
  title: string;
  images: IImage[];
};

const TagCard: React.FC<props> = ({ title, images }) => {
  const navigate = useNavigate();
  const string = images.length > 1 ? "images" : "image";
  return (
    <div
      onClick={() =>
        navigate(`/dashboard/tag/${title}`, { state: { title, images } })
      }
      className="bg-[#252733] rounded-md p-3 text-white cursor-pointer"
    >
      <p className="text-[40px]">{title}</p>
      <p className="mt-16 pl-auto">
        {images.length} {string}
      </p>
    </div>
  );
};

export default TagCard;
