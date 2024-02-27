import LoadingIcon from "./LoadingIcon";
import className from "classnames";
import styles from "./Button.module.css";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) {
  const classes = className(
    rest.className,
    `${styles.margin} ${styles.padding} ${styles.border}`,
    {
      [styles.loading]: loading,
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.success]: success,
      [styles.warning]: warning,
      [styles.danger]: danger,
      [styles.rounded]: rounded,
      [styles.outline]: outline,
      [styles.outlinePrimary]: outline && primary,
      [styles.outlineSecondary]: outline && secondary,
      [styles.outlineSuccess]: outline && success,
      [styles.outlineWarning]: outline && warning,
      [styles.outlineDanger]: outline && danger,
    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <LoadingIcon /> : children}
    </button>
  );
}

export default Button;
