import React from "react";
import eth from "../../images/icon-ethereum.svg";
import clock from "../../images/icon-clock.svg";
import { ClockLogo, Content, ETHLogo, Wrapper } from "./NTFInfos.styles";

const NFTinfos = ({ title, description, price, days }) => {
  return (
    <Wrapper>
      <Content>
        <h1>{title} </h1>
        <p>{description}</p>
        <div>
          <span className="price">
            <ETHLogo src={eth} alt="etherium" />
            {price} ETH
          </span>
          <span className="clock">
            <ClockLogo src={clock} alt="clock" />
            {days} days left
          </span>
        </div>
      </Content>
    </Wrapper>
  );
};

NFTinfos.defaultProps = {
  description: "Our equilibrium collection promotes balance and calm.",
};

export default NFTinfos;
