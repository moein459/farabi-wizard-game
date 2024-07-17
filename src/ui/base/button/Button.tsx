import { ReactNode } from "react";

import "./button.css";

interface ButtonProps {
  type?: "orange" | "red" | "green";
  block?: boolean;
  children: ReactNode;
  onClick?: () => any;
}

function Button({ type, block, onClick, children }: ButtonProps) {
  const classes = `game-button ${type} ${block ? "w-full" : ""}`;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
