import { IError } from "@/app/data";
import React from "react";
import styled from "styled-components";

import { BugFill } from "@styled-icons/bootstrap";
import { useGetData } from "@/app/zustand/store";

const Container = styled.div`
  width: 65%;
  margin-top: 3rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  margin-top: 2rem;
`;

const IconBug = styled(BugFill)`
  height: 8rem;
  width: 8rem;

  color: red;
`;

const BoldText = styled.h3`
  font-size: 3rem;
  font-weight: bold;
`;

const RegularText = styled.h4`
  font-size: 2rem;
  text-align: center;
`;

const ThinText = styled.h5`
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
`;

type WordNotFoundProps = {
  // errorData: IError | null;
};

const WordNotFound: React.FC<WordNotFoundProps> = () => {
  const [error] = useGetData((state) => [state.error]);

  return (
    <Container>
      <SubContainer>
        <IconBug />
      </SubContainer>

      <SubContainer>
        <BoldText>{error?.title}</BoldText>
      </SubContainer>

      <SubContainer>
        <RegularText>{error?.message}</RegularText>
      </SubContainer>

      <SubContainer>
        <ThinText>{error?.resolution}</ThinText>
      </SubContainer>
    </Container>
  );
};
export default WordNotFound;
