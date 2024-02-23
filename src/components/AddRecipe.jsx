import { useState } from "react";
import { useAddRecipeMutation } from "../store";
import styles from "./AddRecipe.module.css";

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
        <button className={styles.addRecipeButton}>Add Recipe</button>
      </form>
    </>
  );
};

export default AddRecipe;
