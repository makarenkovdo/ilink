import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";

export const Button = ({ children, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{children}</MuiButton>
);
