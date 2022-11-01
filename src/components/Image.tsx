import React from "react";
import ImageModal from "./ImageModal";

type props = {
  url: string;
  docId: string;
  sharable: boolean;
  tags: string[];
};

const Image: React.FC<props> = ({ url, docId, sharable, tags }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        className="bg-cover bg-center h-[250px] cursor-pointer rounded-lg relative"
        style={{ backgroundImage: `url(${url})` }}
        onClick={openModal}
      >
        <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-lg">
          <img src={url} alt="file" className="max-h-[90%] rounded-sm" />
        </div>
      </div>

      <div className="absolute">
        <ImageModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          img={url}
          docId={docId}
          sharable={sharable}
          tags={tags}
        />
      </div>
    </>
  );
};

export default Image;
