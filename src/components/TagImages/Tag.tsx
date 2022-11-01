import React from "react";

type props = {
  tagName: string;
  removeTag: (tag: string) => void;
  id: string;
  showRemove?: boolean;
};

const Tag: React.FC<props> = ({ tagName, id, removeTag, showRemove }) => {
  const onRemoveTag = () => {
    removeTag(id);
  };

  return (
    <div className="flex mr-2 bg-[#363740] text-white text-[12px] px-2 py-1 rounded-md">
      <p className="mr-2">{tagName}</p>
      {showRemove && <button onClick={onRemoveTag}>X</button>}
    </div>
  );
};

export default Tag;
