import AvatarImg from "../../images/image-avatar.png";
import { Avatar, Content, Wrapper } from "./Author.styles";

const Author = ({ authorName }) => (
  <Wrapper>
    <Content>
      <Avatar src={AvatarImg} alt="avatar" />
      <p>
        Creation of <span className="author">{authorName}</span>
      </p>
    </Content>
  </Wrapper>
);
export default Author;
