// TODO: (AM) aliases for layers  + fsd eslint plugin
import { useQuery } from "@apollo/client";
import { GET_SENTENCE } from "../../shared/api";
import type { TGetSentenceData } from "../../shared/api";
import { PuzzleTemplate } from "../../shared/ui";

export const Puzzle = () => {
  // TODO: (AM) обработать ошибки
  const { loading, data } = useQuery<TGetSentenceData>(GET_SENTENCE);
  console.log("loading", loading);
  console.log("data", data);
  return loading ? (
    <div>123</div>
  ) : (
    <PuzzleTemplate
      enSentence={data.sentence.en}
      ruSentence={data.sentence.ru}
    />
  );
};
