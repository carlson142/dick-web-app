import { IError } from "@/app/data";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 65%;
`;

type WordNotFoundProps = {
  errorData: IError | null;
};

const WordNotFound: React.FC<WordNotFoundProps> = ({ errorData }) => {
  return <Container>{errorData?.resolution}</Container>;
};
export default WordNotFound;
