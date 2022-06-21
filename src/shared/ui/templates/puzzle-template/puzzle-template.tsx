import PersonIcon from "@mui/icons-material/Person";
import { Typography } from "@mui/material";
import { PuzzleBox } from "../../molecules";

// TODO: (AM) styled!!!

type TTranslatorProps = {
  exampleSentence: string;
  dndSentence: string;
};

export const PuzzleTemplate = ({ enSentence, ruSentence }) => {
  console.log("enSentence, ruSentence", enSentence, ruSentence);
  return (
    <div>
      <div>
        <Typography>Translate this sentence</Typography>
      </div>
      <div>
        <PersonIcon />
        <div>
          <Typography>{ruSentence}</Typography>
        </div>
      </div>
      <div>
        <PuzzleBox sentence={enSentence} />
      </div>
    </div>
  );
};
