import React from "react";
import { IoImagesSharp } from "react-icons/io5";

type props = {
  file: File | null;
};

const DropZone: React.FC<props> = ({ file }) => {
  return (
    <div className="bg-white lg:w-[700px] md:w-[500px] w-[300px] h-[250px] rounded-lg shadow-sm p-6 cursor-pointer">
      <div
        className={`w-full h-[100%] border border-spacing-1 ${
          file ? "border-[#3751FF]" : "border-[#A4A6B3]"
        }  rounded-lg border-dashed flex flex-col justify-center items-center`}
      >
        <IoImagesSharp className="text-[50px] text-[#A4A6B3]" />
        <p className="mt-4 text-[#A4A6B3]">
          Drop your images here, or{" "}
          <span className="text-[#3751FF]">Browse</span>
        </p>
      </div>
    </div>
  );
};

export default DropZone;
