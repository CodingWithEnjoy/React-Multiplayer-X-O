import { SquareContainer } from "../custom-styles";

const Square = ({
  value,
  onClick,
}: {
  value: string | null;
  onClick: () => void;
}) => {
  return (
    <SquareContainer onClick={onClick}>
      <span>{value}</span>
    </SquareContainer>
  );
};

export default Square;
