import { Image } from "@chakra-ui/react";
import styled from "styled-components";

export const Content = styled.div`
  height: 40vh;
  width: 90vw;
  overflow: hidden;

  display: grid;
  gap: 5px;
  grid-template-areas:
    "MainImg MainImg"
    "SecImg TirImg"
    "Division Division";

  img {
    box-sizing: border-box;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    /* rows /columns */
    gap: 30px;
    grid-template-areas:
      "MainImg MainImg SecImg"
      "MainImg MainImg TirImg"
      "Division Division Division";
    img {
      transition: transform 0.5s ease;
    }
    img:hover {
      transform: scale(1.2);
    }
  }
`;

export const Images = styled(Image)`
  background-color: green;
`;

export const MainImg = styled.div`
  grid-area: MainImg;
  overflow: hidden;
`;

export const SecImg = styled.div`
  grid-area: SecImg;
  overflow: hidden;
`;

export const TirImg = styled.div`
  grid-area: TirImg;
  overflow: hidden;
`;

export const Division = styled.div`
  grid-area: Division;
  height: 10px;

  background-color: #f9575a;
`;

export const Container = styled.div``;
