import React from "react";
import Image from "../components/Image";
import { IImage } from "../pages/AllImages/AllImages";
import SortedTagsContainers from "./SortedTagsContainers";

type Prop = {
  images: IImage[];
  sharable: boolean;
  showSort: boolean;
};

const ImageContainer: React.FC<Prop> = ({ images, sharable, showSort }) => {
  const [sortByTag, setSortByTag] = React.useState(false);

  const sortedTags: Record<string, IImage[]> = {};
  images.forEach((img) => {
    img.tags.forEach((tag) => {
      if (sortedTags[tag]) {
        sortedTags[tag].push(img);
      } else {
        sortedTags[tag] = [img];
      }
    });
  });

  const allSortedTags = Object.entries(sortedTags).map(([title, images]) => ({
    title,
    images,
  }));

  return (
    <div className="px-6 pt-5">
      {showSort && (
        <div className="">
          <label
            htmlFor="default-toggle"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              checked={sortByTag}
              id="default-toggle"
              className="sr-only peer"
              onChange={() => setSortByTag(!sortByTag)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-[#252733]">
              Sort By Tags
            </span>
          </label>
        </div>
      )}
      {sortByTag ? (
        <SortedTagsContainers tags={allSortedTags} />
      ) : (
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-20 pt-5">
          {images.map((doc) => (
            <Image
              url={doc.image}
              key={doc.image}
              docId={doc.id}
              sharable={sharable}
              tags={doc.tags || []}
            />
          ))}
        </div>
      )}
    </div>
  );
};
// lg:w-[18%] w-[100%]
export default ImageContainer;
