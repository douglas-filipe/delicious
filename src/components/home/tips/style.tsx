import { Container, Divider } from "@chakra-ui/react";
import styled from "styled-components";

export const Containers = styled(Container)`
  width: 320px;
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 450px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Dividers = styled.div`
  width: 220px;
  height: 2px;
  background-color: #e2e1e1;
  box-sizing: border-box;
`;
