import {
  AlertContainer,
  AlertTitle,
  DisplayScore,
  Button,
} from "../custom-styles";

const Alert = ({
  winner,
  state,
  close,
}: {
  winner: string;
  state: any;
  close: () => void;
}) => {
  return (
    <AlertContainer>
      <AlertTitle>{winner} Won!</AlertTitle>
      <DisplayScore>
        <span className="big-letter">You:</span>
        <span className="span">{state.x}</span>
        <span className="vs" data-text="vs">
          VS
        </span>
        <span className="big-letter">{"'em"}:</span>
        <span className="span">{state.o}</span>
      </DisplayScore>
      <Button onClick={close}>Close</Button>
    </AlertContainer>
  );
};

export default Alert;
