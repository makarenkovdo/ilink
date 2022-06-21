import { useQuery } from "@apollo/client";
import { styled } from "@mui/material";
import { GET_ALL_SENTENCES } from "../shared/api/queries/get-all-sentences";
import { GET_SENTENCE } from "../shared/api/queries/get-sentence";
import { Puzzle } from "../widgets/puzzle";
import { StyledHomePageContainer } from "./styles";

export const HomePage = () => (
  <StyledHomePageContainer>
    <Puzzle />
  </StyledHomePageContainer>
);
