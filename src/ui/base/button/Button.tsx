import { ReactNode } from "react";

import "./button.css";

interface ButtonProps {
  type?: "orange" | "red" | "green";
  block?: boolean;
  children: ReactNode;
}

function Button({ type, block, children }: ButtonProps) {
  const classes = `game-button ${type} ${block ? "w-full" : ""}`;
  return <button className={classes}>{children}</button>;
}

export default Button;
