import { gql, useQuery } from "@apollo/client";

export const GET_SENTENCE = gql`
  query GetSentence {
    sentence {
      en
      ru
    }
  }
`;
