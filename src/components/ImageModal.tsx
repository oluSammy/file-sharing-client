import React from "react";
import Modal from "react-modal";
import { useMutation } from "react-query";
import useApiClient from "../Hooks/useApiClient";
import Button from "./Button";
import { toast } from "react-toastify";
import Tag from "./TagImages/Tag";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

type props = {
  isOpen: boolean;
  closeModal: () => void;
  img: string;
  docId: string;
  sharable: boolean;
  tags: string[];
};

const ImageModal: React.FC<props> = ({
  isOpen,
  closeModal,
  img,
  docId,
  sharable,
  tags,
}) => {
  const apiClient = useApiClient();

  const mutation = useMutation(() => {
    return apiClient.put(`/files/share/${docId}`);
  });

  const handleShare = async () => {
    try {
      await mutation.mutateAsync();
      toast("Image shared successfully");
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="h-[80vh] w-[65vw]">
          <div className="flex">
            <h3 className="mr-6">Tags:</h3>
            <div className="flex">
              {tags.map((tag, idx) => (
                <Tag tagName={tag} removeTag={() => {}} id={`${idx}`} key={`${idx}`} />
              ))}
            </div>
            <button onClick={closeModal} className="ml-auto">
              X
            </button>
          </div>
          <div className="w-[100%] h-[90%] flex justify-center items-center">
            <img src={img} alt="file" className="max-h-[90%] rounded-sm" />
          </div>

          {sharable && (
            <div className="w-[250px] mx-auto">
              <Button
                isLoading={mutation.isLoading}
                label="Share"
                onClick={handleShare}
              />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
