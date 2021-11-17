import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  flex-direction: column;
`;

export const Headers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Highlights = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;
export const Recent = styled.div`
  display: flex;
  grid-area: Recent;

  align-items: center;
  justify-content: center;
`;
export const Footers = styled.div`
  grid-area: Footers;

  display: flex;
  align-items: center;
  justify-content: center;
`;
