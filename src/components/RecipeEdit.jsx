import { useState } from "react";
import { useEditRecipeMutation } from "../store";
import { TfiSave } from "react-icons/tfi";
import styles from "./RecipeEdit.module.css";

const RecipeEdit = ({ recipe, onSubmit }) => {
  const [name, setName] = useState(recipe.name);
  const [editRecipe, results] = useEditRecipeMutation();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editRecipe({ id: recipe.id, name });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.recipeName}
        value={name}
        onChange={handleChange}
      />
      <button className={styles.saveButton}>
        <TfiSave className={styles.saveIcon} />
      </button>
    </form>
  );
};

export default RecipeEdit;
