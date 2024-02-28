import Button from "./Button";
import LoadingIcon from "./LoadingIcon";
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import styles from "./RecipeButtons.module.css";

const RecipeButtons = ({
  results,
  showEdit,
  handleEditClick,
  handleDeleteClick,
}) => {
  const deleteIcon = results.isLoading ? (
    <LoadingIcon />
  ) : (
    <ImBin className={styles.deleteIcon} />
  );

  const editIcon = showEdit ? (
    <FcCancel className={styles.cancelIcon} />
  ) : (
    <FaRegEdit className={styles.editIcon} />
  );

  return (
    <div className={styles.buttons}>
      <Button
        primary
        rounded
        outline
        className={styles.deleteButton}
        onClick={handleDeleteClick}
      >
        {deleteIcon}
      </Button>

      <Button
        primary
        rounded
        outline
        className={styles.editButton}
        onClick={handleEditClick}
      >
        {editIcon}
      </Button>
    </div>
  );
};

export default RecipeButtons;
