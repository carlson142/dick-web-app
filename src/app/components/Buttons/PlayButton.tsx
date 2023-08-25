import React from "react";
import styled from "styled-components";
import { PlayFill } from "@styled-icons/bootstrap";

const IconPlay = styled(PlayFill)`
  height: 4rem;
  width: 4rem;

  color: var(--violet);
`;

const Container = styled.button`
  height: 8rem;
  width: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: var(--lViolet);
  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--violet);

    ${IconPlay} {
      color: white;
    }
  }
`;

type PlayButtonProps = {};

const PlayButton: React.FC<PlayButtonProps> = () => {
  return (
    <Container>
      <IconPlay />
    </Container>
  );
};
export default PlayButton;
