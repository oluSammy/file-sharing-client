import { ThreeDots } from "react-loader-spinner";

const DotLoader = () => {
  return (
    <ThreeDots
      height="25"
      width="25"
      radius="9"
      color="#fff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ display: "flex", justifyContent: "center" }}
      visible={true}
    />
  );
};

export default DotLoader;
