import { RecipesHighLight } from "../../components/home/recipes_highlights";
import { RecipeTips } from "../../components/home/tips";
import { Container, Headers, Highlights, Recent, Footers } from "./style";
export const Home = () => {
  return (
    <Container>
      <Headers></Headers>

      <Highlights>
        <RecipesHighLight />
      </Highlights>

      <Recent>{/* <RecipeTips /> */}</Recent>
      <Footers></Footers>
    </Container>
  );
};
