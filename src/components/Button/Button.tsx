import styles from "./Button.module.css";
import classNames from "classnames";

export default function Button({
  className,
  children,
  type = "primary",
  size = "medium",
  isDisabled = false,
  onClick,
  ...props
}: ButtonProps) {
  const buttonClass = classNames(styles.button, styles[type], styles[size], {
    [styles.disabled]: isDisabled,
    className
  });

  return (
    <button
      className={buttonClass}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
  onClick?: () => void;
  className?: string;
}
