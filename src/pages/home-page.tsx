import { useQuery } from "@apollo/client";
import { GET_ALL_SENTENCES } from "../shared/api/queries/get-all-sentences";
import { GET_SENTENCE } from "../shared/api/queries/get-sentence";
import { Puzzle } from "../widgets/puzzle";

export const HomePage = () => <Puzzle />;
