import React from "react";
import TagCard from "../components/TagCard";
import { IImage } from "../pages/AllImages/AllImages";

type Itags = {
  title: string;
  images: IImage[];
};

type props = {
  tags: Itags[];
};

const SortedTagsContainers: React.FC<props> = ({ tags }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-20 pt-5">
      {tags.map((tag) => (
        <TagCard images={tag.images} title={tag.title} key={tag.title} />
      ))}
    </div>
  );
};

export default SortedTagsContainers;
