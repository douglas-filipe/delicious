import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  gap: 10px;
  grid-template: 2fr 2fr / 1fr 1fr;
  grid-template-areas:
    "main main"
    "second tird";
  transition: all 0.3s ease;

  margin-top: 10px;

  ul {
    margin: auto;
    list-style: none;
    position: absolute;
    align-self: flex-end;

    display: flex;
    flex-direction: column;

    font-size: 0.8rem;

    z-index: 10;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .title,
    .icon {
      color: var(--main-color);
      font-weight: bold;
    }
    .icon {
      margin-right: 5px;
    }
  }
  .main {
    grid-area: main;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    ::after {
      content: "";
      position: absolute;
      background-color: white;
      width: 100%;
      height: 60px;
      display: block;
      left: 0;
      bottom: 0;
      z-index: 1;
      border-radius: 0 0 5px 5px;
    }
    img {
      border-radius: 5px;
      transition: transform 0.5s ease;
    }
    img:hover {
      transform: scale(1.2);
    }
  }
  .second {
    grid-area: second;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    ::after {
      content: "";
      position: absolute;
      background-color: white;
      width: 100%;
      height: 60px;
      display: block;
      left: 0;
      bottom: 0;
      z-index: 1;
      border-radius: 0 0 5px 5px;
    }
    img {
      border-radius: 5px;
      transition: transform 0.5s ease;
    }
    img:hover {
      transform: scale(1.2);
    }
  }
  .tird {
    grid-area: tird;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    ::after {
      content: "";
      position: absolute;
      background-color: white;
      width: 100%;
      height: 60px;
      display: block;
      left: 0;
      bottom: 0;
      z-index: 1;
      border-radius: 0 0 5px 5px;
    }
    img {
      border-radius: 5px;
      transition: transform 0.5s ease;
    }
    img:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
    grid-template: 2fr 2fr / 2fr 2fr 2fr;
    grid-template-areas:
      "main main second"
      "main main tird";

    ul {
      width: 100%;
      height: 60px;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      font-size: 1rem;

      li {
        justify-content: space-around;
      }
    }

    .main {
      ::after {
        content: "";
        position: absolute;
        width: 35%;
        height: 60px;
        display: block;
        left: 35%;
        bottom: 30%;
        border-radius: 0;
      }
      ::before {
        content: "";
        position: absolute;
        background-color: var(--main-color);
        z-index: 1;

        width: 40%;
        height: 60px;
        display: block;
        left: 32.5%;
        bottom: 17%;
      }
      .title {
        display: initial;
        font-size: 2.5rem;
        max-width: 200px;
        position: absolute;
        top: 90%;
        left: 35%;
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 49%,
          rgba(249, 87, 90, 1) 51%,
          rgba(249, 87, 90, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      ul {
        text-align: center;
        align-self: center;
      }
      li {
        display: none;
      }
      img {
        border-radius: 5px;
      }
    }
  }
`;
