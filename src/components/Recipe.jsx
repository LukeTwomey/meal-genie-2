import { useState } from "react";
import RecipeButtons from "./RecipeButtons";
import RecipeEdit from "./RecipeEdit";
import { useDeleteRecipeMutation } from "../store";
import styles from "./Recipe.module.css";

const Recipe = ({ recipe }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [deleteRecipe, results] = useDeleteRecipeMutation();

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    deleteRecipe(recipe);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{recipe.name}</h3>;
  if (showEdit) {
    content = <RecipeEdit onSubmit={handleSubmit} recipe={recipe} />;
  }

  return (
    <>
      <div className={styles.recipe}>
        <RecipeButtons
          results={results}
          showEdit={showEdit}
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
        />
        {content}
      </div>
    </>
  );
};

export default Recipe;
