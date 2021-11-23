import { UseRecipes } from "../../../contexts/Recipes";
import { Container } from "./style";
import {
  AiOutlineHeart as Heart,
  AiOutlineClockCircle as Clock,
} from "react-icons/ai";

export const HomeHighLights = () => {
  const { recipesList } = UseRecipes();
  const sliced = recipesList.slice(0, 3);
  const classes = ["main", "second", "tird"];

  return (
    <Container>
      {sliced.map((elem, index) => (
        <div className={classes[index]}>
          <ul>
            <li className="title">{elem.title}</li>
            <li>
              <Heart className="icon" /> 100
            </li>
            <li>
              <Clock className="icon" />
              {elem.time}
            </li>
          </ul>
          <img
            src="https://www.sabornamesa.com.br/media/k2/items/cache/8212207f146778f83156ffc204ca380c_XL.jpg"
            alt={elem.title}
          />
        </div>
      ))}
    </Container>
  );
};
