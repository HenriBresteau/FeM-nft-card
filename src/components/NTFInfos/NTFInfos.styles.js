import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
`;
export const Content = styled.div`
  color: var(--softBlue);
  h1 {
    color: var(--white);
    font-size: 1.75rem;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      color: var(--cyan);
    }
  }
  p {
    font-size: 16px;
    line-height: 28px;
  }
  div {
    display: flex;
    justify-content: space-between;

    .price {
      color: var(--cyan);
      display: flex;
      font-weight: 600;
      align-items: center;
      font-size: 14px;
      line-height: 24px;
    }
    .clock {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
export const ETHLogo = styled.img`
  height: 18px;
  margin-right: 6px;
`;
export const ClockLogo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 6px;
`;
