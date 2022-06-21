import { gql, useQuery } from "@apollo/client";

export const GET_ALL_SENTENCES = gql`
  query GetAllSentences {
    sentenceAll {
      en
      ru
    }
  }
`;
