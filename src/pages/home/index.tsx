import { PagesFooter } from "../../components/home/footer";
import { SignupModal } from "../../components/modals/signupModal";
import {
  Container,
  Header,
  Highlight,
  Content,
  Footer,
  MainContainer,
} from "./style";

export const Home = () => {
  return (
    <MainContainer>
      <Container>
        <Header>hearder</Header>
        <Highlight>destaques</Highlight>
        <Content></Content>
        <Footer>
          <PagesFooter></PagesFooter>
        </Footer>
      </Container>
    </MainContainer>
  );
};
