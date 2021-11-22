import { Content, Container, Participants } from "./style";
import { IconButton } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import linkedin from "../../../assets/img/linkedin.png";
export const PagesFooter = () => {
  const integrantes = [
    "Anthony F.",
    "Douglas F.",
    "Estevan M.",
    "Kelvin A.",
    "Mônica S.",
  ];
  return (
    <Container>
      <Content>
        {integrantes.map((elem) => (
          <Participants className="teste">
            {elem}
            <IconButton
              aria-label="Search database"
              className="icons"
              icon={<FaLinkedinIn />}
            />
          </Participants>
        ))}
      </Content>
    </Container>
  );
};
