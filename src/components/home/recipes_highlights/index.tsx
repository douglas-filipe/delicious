import { UseRecipes } from "../../../contexts/Recipes";
import {
  Container,
  Content,
  Images,
  MainImg,
  SecImg,
  TirImg,
  Division,
} from "./style";

export const RecipesHighLight = () => {
  const { recipesList } = UseRecipes();
  // const highlight = recipesList.slice(0, 3);

  return (
    // <Container>
    //   <MainImg>
    //     <li>{highlight[0].title}</li>
    //     <Images src={highlight[0].img} alt={highlight[0].title} />
    //   </MainImg>
    //   <SecImg>
    //     <li>{highlight[1].title}</li>
    //     <Images src={highlight[1].img} alt={highlight[1].title} />
    //   </SecImg>
    //   <TirImg>
    //     <li>{highlight[0].title}</li>
    //     <Images src={highlight[2].img} alt={highlight[2].title} />
    //   </TirImg>
    // </Container>

    <Container>
      <p>Destaques</p>
      <Content>
        <MainImg>
          <Images
            src="https://img.itdg.com.br/tdg/images/blog/uploads/2019/09/bolos-para-fazer-no-final-de-semana.jpg"
            alt="{recipesList[0].title}"
          />
        </MainImg>
        <SecImg>
          <Images
            src="https://www.tuacasa.com.br/wp-content/uploads/2020/11/bolo-aniversario-masculino-00.png"
            alt="{recipesList[1].title}"
          />
        </SecImg>
        <TirImg>
          <Images
            src="https://www.tuacasa.com.br/wp-content/uploads/2020/03/bolo-rose-gold-capa-substituir-400x220.jpg"
            alt="{highlight[0].title}"
          />
        </TirImg>
        <Division />
      </Content>
    </Container>
  );
};
