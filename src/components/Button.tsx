import React from "react";
import DotLoader from "./Loaders/DotLoader";

type props = {
  label: string;
  isLoading: boolean;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<props> = ({ label, isLoading, onClick }) => {
  return (
    <button
      className={`bg-[#363740] text-white w-full font-[800] py-3 rounded cursor-pointer`}
      onClick={onClick}
      // disabled={!isValid}
    >
      {isLoading ? <DotLoader /> : label}
    </button>
  );
};

export default Button;
