import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 15px;
`;
export const Image = styled.img`
  border-radius: 6px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: filter 0.3s ease;
  &:hover {
    filter: brightness(0.75);
  }
`;
