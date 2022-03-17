import styled from "styled-components";

export const Wrapper = styled.div``;
export const Content = styled.div`
  display: flex;
  align-items: center;
  p {
    color: var(--softBlue);
    margin-left: 18px;
  }
  .author {
    color: var(--white);
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      color: var(--cyan);
    }
  }
`;
export const Avatar = styled.img`
  height: 36px;
  border: 2px solid #fff;
  border-radius: 50%;
`;
