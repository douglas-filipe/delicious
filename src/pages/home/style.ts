import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  display: grid;

  grid-template: 1fr 4fr 4fr 1fr / 1fr;
  grid-template-areas:
    "Header"
    "Highlight"
    "Content"
    "Footer";

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 1024px) {
    width: 900px;
  }
`;

export const Header = styled.div`
  grid-area: Header;
`;

export const Highlight = styled.div`
  grid-area: Highlight;
  background-color: whitesmoke;
`;

export const Content = styled.div`
  grid-area: Content;
`;

export const Footer = styled.div`
  grid-area: Footer;

  background-color: whitesmoke;
`;
