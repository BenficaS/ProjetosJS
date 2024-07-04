import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavigationContainer = styled.button`
  font-family: 'Poppins-Regular';
  padding-left: 10px;
  background-color: #DDC27C;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid #DDC27C;

  &::hover {
    color: black;
  }
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export function Navigation() {
    const navigate = useNavigate()
    return (
        <Nav>
            <NavigationContainer onClick={() => navigate('/home')}>Home</NavigationContainer>
            <NavigationContainer onClick={() => navigate('/perfil')}>Perfil</NavigationContainer>
            <NavigationContainer onClick={() => navigate('/avaliacao')}>Avaliação do Motorista</NavigationContainer>
            <NavigationContainer onClick={() => navigate('/suporte')}>Suporte</NavigationContainer>
            <NavigationContainer onClick={() => navigate('/servico')}>Serviços</NavigationContainer>
        </Nav>
    );
}

export default Navigation;