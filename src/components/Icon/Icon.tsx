import React from "react";
import classNames from "classnames";
import styles from "./Icon.module.css";

type IconColor = "black" | "white" | "muted" | "disabled";

interface IconProps {
  icon: React.FC<React.SVGProps<SVGElement>>;
  size?: number;
  color?: IconColor;
  className?: string;
}

export default function Icon({
  icon: SvgIcon,
  size = 20,
  color = "black",
  className
}: IconProps) {
  return (
    <SvgIcon
      width={size}
      height={size}
      className={classNames(styles.icon, styles[color], className)}
    />
  );
}
