import { useFetchRecipesQuery } from "../store";
import Recipe from "./Recipe";
import LoadingIcon from "./LoadingIcon";

const Recipes = () => {
  const { data, error, isFetching } = useFetchRecipesQuery();

  let content;
  if (isFetching) {
    content = <LoadingIcon />;
  } else if (error) {
    console.log("error"); // output error to user
  } else {
    content = data.map((recipe) => {
      return <Recipe recipe={recipe} key={recipe.id} />;
    });
  }

  return content;
};

export default Recipes;
