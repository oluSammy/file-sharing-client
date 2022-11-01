import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import DropZone from "../../components/DropZone";
import { AiOutlineDelete } from "react-icons/ai";
import TagImages, { TTag } from "../../components/TagImages/TagImages";
import Button from "../../components/Button";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/firebaseConfig";
import short from "short-uuid";
import useApiClient from "../../Hooks/useApiClient";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [allTags, setAllTags] = useState<TTag[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiClient = useApiClient();

  const handleChange = (file: File) => {
    setFile(file);
  };

  const removeFile = () => {
    setFile(null);
    setAllTags([]);
  };

  const mutation = useMutation(
    (payload: { imageId: string; tags: string[] }) => {
      return apiClient.post("/files/saveImage", payload);
    }
  );

  const onSubmit = async () => {
    try {
      if (!file) {
        return toast.error("Please select a file");
      }
      setIsSubmitting(true);
      const id = short.generate();

      const imageRef = ref(storage, `images/${file.name}-${id}`);
      const snapShot = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(snapShot.ref);

      await mutation.mutateAsync({
        imageId: url,
        tags: allTags.map((tag) => tag.tagName),
      });
      toast("Image uploaded successfully");
      setIsSubmitting(false);
      setFile(null);
      setAllTags([]);
    } catch (e) {
      setIsSubmitting(false);
      toast("Error: Unable to upload image");
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-[60px] ">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          multiple={false}
          children={<DropZone file={file} />}
        />
      </div>
      <div className="lg:w-[700px] md:w-[500px] w-[90%] mx-auto mt-8">
        {file && (
          <div className="flex justify-between items-center w-full hover:bg-white px-3 py-3 rounded-lg">
            <div className="lg:w-[700px] md:w-[500px] w-[90%]]">
              <p>{file.name}</p>
            </div>
            <div
              onClick={removeFile}
              className="cursor-pointer hover:text-red-500"
            >
              <AiOutlineDelete />
            </div>
          </div>
        )}
      </div>
      <div className="lg:w-[700px] md:w-[500px] w-[90%] mx-auto mt-8 px-3">
        <TagImages allTags={allTags} setAllTags={setAllTags} />
      </div>

      <div className="lg:w-[700px] md:w-[500px] w-[90%] mx-auto mt-8 px-3">
        <Button label="Upload" isLoading={isSubmitting} onClick={onSubmit} />
      </div>
    </div>
  );
};

export default Upload;
