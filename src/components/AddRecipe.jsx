import { useState } from "react";
import { useAddRecipeMutation } from "../store";
import Button from "./Button";

const AddRecipe = () => {
  const [addRecipe, results] = useAddRecipeMutation();
  const [recipeName, setRecipeName] = useState("");

  const handleChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(recipeName);
    setRecipeName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={recipeName} onChange={handleChange} />
        <Button
          loading={results.isLoading}
          rounded
          primary
          onClick={handleSubmit}
        >
          + Add Recipe
        </Button>
      </form>
    </>
  );
};

export default AddRecipe;
