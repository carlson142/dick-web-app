import { useGetData, useInputStore } from "@/app/zustand/store";
import React, { useEffect } from "react";
import styled from "styled-components";

import { Search } from "@styled-icons/bootstrap";

const Container = styled.div`
  position: relative;
  width: 55%;
  /* background-color: pink; */
`;

const Input = styled.input`
  /* width: 65rem; */
  width: 100%;
  height: 5rem;

  border: 2px solid white;
  border-radius: 1rem;
  outline: none;

  &:focus {
    border: 2px solid var(--violet);
  }

  padding: 3rem;
  font-family: inherit;
  font-size: 1.7rem;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem;

  transform: translate(0, -50%);
`;

const IconSearch = styled(Search)`
  height: 3rem;
  width: 2rem;

  color: var(--violet);
  cursor: pointer;
`;

type CustomInputProps = {};

const CustomInput: React.FC<CustomInputProps> = () => {
  const inputValue = useInputStore((state) => state.input);
  const setInput = useInputStore((state) => state.setInput);

  const getData = useGetData((state) => state.getData);

  const handleKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getData(inputValue);
    }
  };

  return (
    <Container>
      <Input
        placeholder="Search for any word..."
        value={inputValue}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPressed}
      />

      <IconContainer>
        <IconSearch onClick={() => getData(inputValue)} />
      </IconContainer>
    </Container>
  );
};
export default CustomInput;
