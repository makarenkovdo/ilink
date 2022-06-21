import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";

export const Button = ({ title }: ButtonProps) => {
  return <MuiButton variant="info">{title}</MuiButton>;
};
