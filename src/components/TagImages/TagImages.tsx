import React from "react";
import Button from "../Button";
import Input from "../Input";
import short from "short-uuid";
import Tag from "./Tag";

export type TTag = {
  id: string;
  tagName: string;
};

type props = {
  allTags: TTag[];
  setAllTags: React.Dispatch<React.SetStateAction<TTag[]>>;
};

const TagImages: React.FC<props> = ({ allTags, setAllTags }) => {
  const [tag, setTag] = React.useState("");

  const onAddTag = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!tag) return;
    const id = short.generate();
    setAllTags([...allTags, { id, tagName: tag }]);
    setTag("");
  };

  const removeTag = (id: string) => {
    setAllTags(allTags.filter((tag) => tag.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <h3 className="text-[#A4A6B3] text-[16px] font-[700]">Tag Images</h3>
      </div>
      <div className="flex flex-wrap">
        {allTags.map((tag, idx) => (
          <p key={tag.id}>
            <Tag
              tagName={tag.tagName}
              id={tag.id}
              removeTag={removeTag}
              showRemove={true}
            />
          </p>
        ))}
      </div>
      <form className="flex items-center justify-between">
        <div className="w-[65%]">
          <Input
            label="Tag"
            placeholder="tag"
            type="text"
            value={tag}
            onChange={setTag}
            error=""
          />
        </div>
        <div className="w-[30%] mt-[-10px]">
          <Button label="Tag" isLoading={false} onClick={onAddTag} />
        </div>
      </form>
    </div>
  );
};

export default TagImages;
