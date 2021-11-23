import styled from "styled-components";

export const Containers = styled.div`
  width: 300px;
  height: 450px;

  padding: 10px;
  background-color: var(--white);
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  font-size: 0.8rem;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 1.3rem;
    align-self: center;
    padding: 5px;
    position: relative;
    margin-bottom: 5px;
  }
  h1::after {
    content: "";
    position: absolute;
    border-bottom: 2px solid lightgray;
    width: 300px;
    left: -120px;
    top: 40px;
  }

  h3 {
    font-weight: bold;
  }
  p {
    color: var(--main-color);
  }

  img {
    width: 70px;
    border-radius: 10px;
  }
  @media (min-width: 768px) {
    margin: 50px;
    align-self: flex-end;
  }
`;

export const Card = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  padding: 10px;
  border-bottom: 2px solid lightgray;
`;
