import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import logo from "@/assets/logo.svg";
import SwitchButton from "../Buttons/SwitchButton";

import { Sun, Moon } from "@styled-icons/bootstrap";

const Container = styled.nav`
  width: 55%;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 3rem;

  /* background-color: green; */
`;

const LogoContainer = styled.div``;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FontContainer = styled.div``;

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div``;

const IconSun = styled(Sun)`
  height: 3rem;
  width: 3rem;

  color: var(--violet);
  cursor: pointer;
`;

const IconMoon = styled(Moon)`
  height: 3rem;
  width: 2.5rem;

  color: var(--violet);
  cursor: pointer;
`;

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container>
      <LogoContainer>
        <Image alt="logo" src={logo} />
      </LogoContainer>

      <SubContainer>
        <ThemeContainer>
          <IconContainer style={{ marginRight: "2rem" }}>
            <IconSun />
          </IconContainer>

          <SwitchButton />

          <IconContainer style={{ marginLeft: "2rem" }}>
            <IconMoon />
          </IconContainer>
        </ThemeContainer>
      </SubContainer>
    </Container>
  );
};
export default Header;
