import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  display: grid;

  grid-template: 2fr 4fr 8fr 2fr / 1fr;
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
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  .titles {
    font-size: 2rem;
    font-weight: bold;
    position: relative;
  }
  .titles::after {
    content: "";
    position: absolute;
    border: 2px solid var(--main-color);
    width: 85px;
    left: 70px;
    top: 45px;
  }
  @media (min-width: 768px) {
    ::after {
      content: "";
      position: relative;
      border-bottom: 5px solid var(--main-color);
      width: 100%;
      top: 50px;
    }
  }
`;

export const Content = styled.div`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .titles {
    font-size: 2rem;
    font-weight: bold;
    position: relative;
  }
  .titles::after {
    content: "";
    position: absolute;
    border: 2px solid var(--main-color);
    width: 95px;
    left: 165px;
    top: 45px;
  }
  @media (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const Footer = styled.div`
  grid-area: Footer;
`;
