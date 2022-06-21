import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <MuiButton variant="info" {...rest}>
      {children}
    </MuiButton>
  );
};
