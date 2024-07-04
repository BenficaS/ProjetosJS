import React, { useState } from 'react';
import Menu from '../Menu';
import styled from 'styled-components';  

const Button = styled.button`
font-family: 'Poppins-Regular';
padding-left: 10px;
background-color: #DDC27C;

border-radius: 20px;
border: 1px solid #DDC27C;
  `

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background: black;
  z-index: -1;
`;

export function Hamburguer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {"☰"}
      </Button>
      {isMenuOpen && <Menu />}
      {isMenuOpen && <Background onClick={closeMenu} />}
    </>   
  );
}