import { useFetchRecipesQuery } from "./store";
import Recipe from "./components/Recipe";

function App() {
  const { data, error, isFetching } = useFetchRecipesQuery();

  let content;
  if (isFetching) {
    // console.log("Loading..."); // add loading icon
  } else if (error) {
    console.log("error"); // output error to user
  } else {
    content = data.map((recipe) => {
      return <Recipe recipe={recipe} key={recipe.id} />;
    });
  }

  return content;
}

export default App;
