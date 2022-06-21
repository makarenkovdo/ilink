import { StyledPuzzleElement } from "./styles";

type TPuzzleElementProps = {
  content: string;
};

export const PuzzleElement = ({ children }) => {
  return <StyledPuzzleElement>{children}</StyledPuzzleElement>;
};
