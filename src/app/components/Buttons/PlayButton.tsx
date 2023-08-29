import React from "react";
import styled from "styled-components";
import { PlayFill } from "@styled-icons/bootstrap";
import { useGetData } from "@/app/zustand/store";
import { IData } from "@/app/data";

import ReactPlayer from "react-player";

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
  const data: IData[] = useGetData((state) => state.data);
  const soundUrl = data
    .map((el) => el.phonetics.map((el) => el.audio))
    .map((el) => el[0])
    .filter((el) => el && el.length > 0)[0];

  // console.log(ReactPlayer.canPlay(soundUrl));

  // console.log(data);

  return (
    <Container>
      {ReactPlayer.canPlay(soundUrl) && (
        <ReactPlayer
          url={soundUrl}
          controls={true}
          height={20}
          width={20}
          playIcon={<IconPlay />}
          light={true}
        />
      )}
    </Container>
  );
};
export default PlayButton;
