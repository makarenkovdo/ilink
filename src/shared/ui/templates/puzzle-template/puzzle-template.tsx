import styled from "@emotion/styled";
import PersonIcon from "@mui/icons-material/Person";
import { ButtonProps, Typography } from "@mui/material";
import { grid } from "@mui/system";
import { useCallback, useState } from "react";
import { Button } from "../../atoms";
import { PuzzleBox } from "../../molecules";
import React from "react";
// TODO: (AM) добавить web-speech-cognitive-services для либы либо найти другую либу
import Say from "react-say";

// TODO: (AM) styled!!!

type TTranslatorProps = {
  exampleSentence: string;
  dndSentence: string;
};

const StyledPersonIcon = styled(PersonIcon)(() => ({
  width: "150px",
  height: "150px",
}));

const StyledExampleTextBox = styled("div")(() => ({
  border: "1px solid black",
  borderRadius: "5px",
}));

const StyledExampleContainer = styled("div")(() => ({
  display: "grid",
  gridAutoFlow: "column",
}));

const StyledButtonBox = styled("div")(() => ({
  textAlign: "center",
}));

export const PuzzleTemplate = ({ enSentence, ruSentence }) => {
  const [buttonColor, setButtonColor] = useState<ButtonProps["color"]>("info");
  const [userAnswer, setUserAnswer] = useState("");
  const [isRightAnswer, setIsRightAnswer] = useState<boolean | undefined>(
    undefined,
  );

  const handleUserAction = (str: string) => {
    setUserAnswer(str);
  };
  console.log("userAnswer", userAnswer);

  const handleCheckClick = useCallback(() => {
    const isEqual = userAnswer === enSentence.toLowerCase();
    setIsRightAnswer(isEqual);
    setButtonColor(isEqual ? "success" : "error");
  }, [userAnswer]);

  return (
    <div>
      <div>
        <Typography variant="h5">Translate this sentence</Typography>
      </div>
      <StyledExampleContainer>
        <StyledPersonIcon />
        <StyledExampleTextBox>
          <Typography>{ruSentence}</Typography>
        </StyledExampleTextBox>
      </StyledExampleContainer>
      <div>
        <PuzzleBox sentence={enSentence} handleChange={handleUserAction} />
      </div>
      <StyledButtonBox>
        <Button
          color={buttonColor}
          variant="contained"
          onClick={handleCheckClick}
        >
          Check
        </Button>
        {isRightAnswer && (
          <Say
            pitch={1.1}
            rate={1}
            speak="A quick brown fox jumped over the lazy dogs."
            volume={0.8}
            text={enSentence}
          />
        )}
      </StyledButtonBox>
    </div>
  );
};
