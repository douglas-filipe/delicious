// import { UseRecipes } from "../../../contexts/Recipes";
import { Containers, Card } from "./style";

export const RecipeTips = () => {
  //   const { recipesList } = UseRecipes();

  return (
    <Containers>
      <h1>Dicas</h1>
      {Array(3)
        .fill(0)
        .map((elem) => (
          <>
            <h3>Lorem Ipsum</h3>
            <Card>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent non interdum arcu.{" "}
              </p>
              <img
                src="https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/10/cupcake-de-chocolate-receita.jpg"
                alt="cupcake"
              />
            </Card>
          </>
        ))}
    </Containers>
  );
};
