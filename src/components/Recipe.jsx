import { useState } from "react";
import RecipeEdit from "./RecipeEdit";
import { useDeleteRecipeMutation } from "../store";
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
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
        <ImBin className={styles.deleteIcon} onClick={handleDeleteClick} />{" "}
        <FaRegEdit className={styles.editIcon} onClick={handleEditClick} />
        {content}
      </div>
    </>
  );
};

export default Recipe;
