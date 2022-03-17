import React from "react";
import url from "../../images/image-equilibrium.jpg";
import { Image, Wrapper } from "./MainImage.styles";

const MainImage = () => {
  return (
    <Wrapper>
      <Image src={url} alt="nft-presentation" />
    </Wrapper>
  );
};

export default MainImage;
