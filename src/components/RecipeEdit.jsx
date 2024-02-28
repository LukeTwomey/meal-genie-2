import { useState } from "react";
import Button from "./Button";
import LoadingIcon from "./LoadingIcon";
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
    editRecipe({ id: recipe.id, name });
    onSubmit();
  };

  const saveIcon = results.isLoading ? (
    <LoadingIcon />
  ) : (
    <TfiSave className={styles.saveIcon} />
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.recipeName}
        value={name}
        onChange={handleChange}
      />
      <Button
        loading={results.isLoading}
        rounded
        primary
        className={styles.saveButton}
      >
        {saveIcon}
      </Button>
    </form>
  );
};

export default RecipeEdit;
