import { IData } from "@/app/data";
import React from "react";
import styled from "styled-components";
import PlayButton from "../Buttons/PlayButton";

const Container = styled.div`
  width: 55%;
  margin-top: 3rem;
`;

const WordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface TextProps {
  tColor?: string;
}

const BigText = styled.h1`
  font-size: 5rem;
`;

const MediumText = styled.h3<TextProps>`
  font-size: 3rem;
  font-weight: normal;

  color: var(--violet);
`;

const SmallText = styled.h5`
  font-size: 1.8rem;
  font-weight: normal;

  margin-top: 2rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const ExampleText = styled.div`
  font-size: 1.5rem;
  color: hsl(0deg, 0%, 46%);
  text-decoration: underline;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const SubContainer = styled.div``;

const List = styled.ul`
  list-style: none;
`;

const Element = styled.li`
  font-size: 1.6rem;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  /* Dot before element */
  &::before {
    content: "";
    display: block;

    position: absolute;
    top: 50%;
    left: -1.5rem;
    transform: translate(0, -50%);

    height: 5px;
    width: 5px;
    border-radius: 50%;

    background-color: var(--violet);
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 2px;

  background-color: lightgray;
`;

type DataComponentProps = {
  data: IData[];
};

const DataComponent: React.FC<DataComponentProps> = ({ data }) => {
  // ALL INFORMATION FROM API
  const info = data[0];

  console.log(info);

  // ZNACHENNYA
  const [...meanings] = info.meanings;

  console.log(meanings);

  return (
    <Container>
      {/* WORD */}
      <WordContainer>
        <BigText>{info.word}</BigText>
        <PlayButton />
      </WordContainer>

      {/* PHONETIC */}
      <SubContainer>
        <MediumText>{info.phonetic}</MediumText>
      </SubContainer>

      {/* MEANINGS */}
      <SubContainer>
        {meanings.map((el, i) => {
          return (
            <SubContainer>
              <SmallText style={{ fontWeight: "bold", fontStyle: "italic" }}>
                {el.partOfSpeech}
                <Separator />
              </SmallText>

              <SmallText>Meaning:</SmallText>

              <List>
                {el.definitions.map((el) => {
                  return (
                    <>
                      <Element>{el.definition}</Element>
                      <ExampleText>{el.example}</ExampleText>
                      {el.synonyms.length > 0 && (
                        <SmallText
                          style={{
                            color: "hsl(0deg, 0%, 46%)",
                            marginTop: "4rem",
                          }}
                        >
                          Sinonyms: {el.synonyms.join(", ")}
                        </SmallText>
                      )}
                    </>
                  );
                })}
              </List>

              <SubContainer>
                {el.synonyms.length > 0 && (
                  <SmallText style={{ color: "hsl(0deg, 0%, 46%)" }}>
                    Sinonyms: {el.synonyms.join(", ")}
                  </SmallText>
                )}
              </SubContainer>

              <SubContainer>
                {el.antonyms.length > 0 && (
                  <SmallText style={{ color: "hsl(0deg, 0%, 46%)" }}>
                    Antonyms: {el.antonyms.join(", ")}
                  </SmallText>
                )}
              </SubContainer>
            </SubContainer>
          );
        })}
      </SubContainer>

      {/* Synonyms */}
    </Container>
  );
};
export default DataComponent;
