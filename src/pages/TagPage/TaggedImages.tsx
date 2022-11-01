import React from "react";
import { useLocation } from "react-router-dom";
import ImageContainer from "../../containers/ImageContainer";

const TaggedImages = () => {
  const { state } = useLocation();

  return (
    <ImageContainer images={state.images} sharable={true} showSort={false} />
  );
};

export default TaggedImages;
