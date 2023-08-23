import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: red; */
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  height: 2.5rem;
  width: 5rem;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  height: 0;
  width: 0;
`;

type SProps = {
  toggle: boolean;
};

const Span = styled.span<SProps>`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${(props) =>
    props.toggle === false ? "gray" : "hsl(274deg, 82%, 60%)"};
  border-radius: 2rem;

  &:hover {
    background-color: var(--violet);
  }

  &::after {
    content: "";
    display: block;

    position: absolute;
    left: ${(props) => (props.toggle === false ? "0.4rem" : "2.9rem")};
    top: 50%;
    transform: translate(0, -50%);

    height: 1.75rem;
    width: 1.75rem;
    background-color: white;
    border-radius: 50%;

    transition: all 0.2s ease-in;
  }
`;

type SwitchButtonProps = {};

const SwitchButton: React.FC<SwitchButtonProps> = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Label>
        <Input />
        <Span
          toggle={toggle}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
      </Label>
    </Container>
  );
};
export default SwitchButton;
