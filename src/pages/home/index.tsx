import { PagesFooter } from "../../components/home/footer";
import { HomeHighLights } from "../../components/home/highlight";
import { RecipeTips } from "../../components/home/tips";
// import { SignupModal } from "../../components/modals/signupModal";
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
        <Highlight>
          <p className="titles">Destaques</p>
          <HomeHighLights />
        </Highlight>
        <Content>
          <p className="titles">Receitas recentes</p>
          <RecipeTips />
        </Content>
        <Footer>
          <PagesFooter></PagesFooter>
        </Footer>
      </Container>
    </MainContainer>
  );
};
