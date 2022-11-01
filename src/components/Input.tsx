import React, { Dispatch, SetStateAction } from "react";

type props = {
  label: string;
  placeholder: string;
  type: string;
  error: string;
  errorState?: boolean;
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  showLabel?: boolean;
};

const Input: React.FC<props> = ({
  label,
  placeholder,
  type,
  onChange,
  value,
  showLabel,
}) => {
  return (
    <div>
      {showLabel && (
        <label className="block text-[#828282] text-[14px]">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-[1px] border-[##E0E0E0] rounded-[4px] p-[10px] mt-[10px] mb-[20px] focus:outline-none focus:border-[#525252]"
      />
    </div>
  );
};

export default Input;
