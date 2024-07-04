import React from 'react';
import { Navigation } from '../Navigation';
import { InputComponent2 } from '../InputComponent2';
import logo from '../../imgs/logo.png';
import styled from 'styled-components';

const Logo = styled.img`
  position: relative;
  right: 41px;
  transform: scale(0.8);
`;

function Menu() {
    return (
        <div>
            <h2>Menu</h2>
            <Logo src={logo} alt="Logo" />
            <Navigation />
            {/* <InputComponent placeHolderText="Digite aqui" /> */}
            
        </div>
    );
}

export default Menu;