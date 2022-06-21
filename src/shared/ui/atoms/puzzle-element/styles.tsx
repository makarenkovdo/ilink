import { styled } from "@mui/material";

export const StyledPuzzleElement = styled("div")(({ theme }) => ({
  display: "flex",
  height: "15px",
  width: "40px",
  justifyContent: "space-around",
  borderRadius: "10px",
  boxShadow: theme.shadows[1],
  fontSize: "12px",
  backgroundColor: theme.palette.grey[100],
}));
