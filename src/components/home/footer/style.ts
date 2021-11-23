import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--main-color);

  @media (min-width: 768px) {
    .teste::after,
    .teste::before {
      content: "";
      display: block;
      position: absolute;
      width: 20%;
      height: 20%;
      border: 1px solid;
      transition: all 0.6s ease;
      border-radius: 2px;
    }

    .teste::after {
      bottom: 0;
      right: 0;
      border-top-color: transparent;
      border-left-color: transparent;
      border-bottom-color: transparent;
      border-right-color: transparent;
    }

    .teste::before {
      top: 0;
      left: 0;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: transparent;
      border-left-color: transparent;
    }

    .teste:hover::after,
    .teste:hover::before {
      border-bottom-color: var(--white);
      border-right-color: var(--white);
      border-top-color: var(--white);
      border-left-color: var(--white);

      width: 95%;
      height: 90%;
    }
  }
`;

export const Content = styled.div`
  color: var(--background);
  font-weight: bold;
  width: 100%;
  height: 100%;
  padding: 5px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Participants = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  margin: 1px;
  .icons {
    background-color: transparent;
    width: 8px;
    height: 8px;
  }
  .icons:hover {
    background-color: transparent;
  }
  @media (min-width: 768px) {
    margin: 10px;
    font-size: 0.9rem;
    font-weight: bold;

    .icons {
      width: 20px;
      height: 20px;
    }

    position: relative;
    padding: 1em 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    margin: 1em 0.8em;
  }
`;
