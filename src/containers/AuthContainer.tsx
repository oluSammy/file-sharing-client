import React from "react";

const AuthContainer = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="flex pt-[150px] items-center justify-center">{children}</div>
  );
};

export default AuthContainer;
