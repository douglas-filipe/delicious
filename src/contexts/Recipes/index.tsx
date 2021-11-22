import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";

interface RecipeProps {
  children: ReactNode;
}

interface RecipeProviderData {
  recipesList: Recipe[];
}

interface Recipe {
  _id: string;
  title: string;
  description: string;
  img: string;
  category: string;
  level: string;
  preparation: string;
  ingredients: string;
  time: string;
  author: Object;
  likes: Array<any>;
  createdAt: string;
  updatedAt: string;
  __v: Number;
}

const RecipesContext = createContext<RecipeProviderData>(
  {} as RecipeProviderData
);

export const UseRecipes = () => useContext(RecipesContext);

const RecipesProvider = ({ children }: RecipeProps) => {
  const [recipesList, setRecipesList] = useState<Recipe[]>([]);

  useEffect(() => {
    api
      .get("/recipe")
      .then((response) => setRecipesList(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <RecipesContext.Provider value={{ recipesList }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
