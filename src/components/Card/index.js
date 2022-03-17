import Author from "../Author";
import MainImage from "../MainImage";
import NFTinfos from "../NTFInfos";
import { Content, Divider, Wrapper } from "./Card.styles";

const Card = () => (
  <Wrapper>
    <Content>
      <MainImage />
      <div>
        <NFTinfos title="Equilibrium #3212" price="0.041" days={3} />
        <Divider />
        <Author authorName="Jules Vernes" />
      </div>
    </Content>
  </Wrapper> 
);
export default Card;
