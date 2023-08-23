import { useInputStore } from "@/app/zustand/store";
import React from "react";
import styled from "styled-components";

import { Search } from "@styled-icons/bootstrap";

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 65rem;
  height: 5rem;

  border: 2px solid white;
  border-radius: 1rem;
  outline: none;

  &:focus {
    border: 2px solid var(--violet);
  }

  padding: 0 2rem;
  font-family: inherit;
  font-size: 1.6rem;
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

  return (
    <Container>
      <Input
        placeholder="Search for any word..."
        value={inputValue}
        onChange={(e) => setInput(e.target.value)}
      />

      <IconContainer>
        <IconSearch />
      </IconContainer>
    </Container>
  );
};
export default CustomInput;
