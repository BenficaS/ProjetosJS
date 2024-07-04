import imagem from '../imgs/gabriel.jpg'
// import '../styles/MotoristaG.css'
import inclusi from '../imgs/logo.png'
import { Hamburguer } from './Hamburguer'
import styled from 'styled-components'

const BodyMotorista = styled.div`
width:400px;
margin:0px;
`
const ImagemMotorista = styled.img`
border-radius:100px;
`
const FormM = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const FormH2 = styled.h2`
font-size:25px;
color:white;
text-align:center;
margin:0px;
`
const FormH2Moto = styled.h2`
font-size:20px;
color:white;
margin:0;
`
const ContFoto = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
padding:5px;
`

const Botao = styled.button`
height:50px;
width:300px;
background-color:grey;
color:white;
border-radius:100px;
margin-top:20px;
`

const MainDiv = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content:space-between;
`

const FooterDiv = styled.div`
display:flex;
justify-content: center;
padding: 60px;
`
const Principal = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: -2;
`

export default function MotoristaG() {
  return (
    <>
      <>
       <Hamburguer />
      </>
      <Principal>
        <BodyMotorista>
          <ContFoto>
            <MainDiv>
              <ImagemMotorista src={imagem} width={120} heigth={100} />
              <FormM>
                <FormH2>Gabriel Benfica</FormH2>
                <FormH2Moto>Motorista Parceiro</FormH2Moto>
                <FormH2Moto>Carteira:</FormH2Moto>
                <FormH2Moto>R$237,70</FormH2Moto>
              </FormM>
            </MainDiv>
          </ContFoto>
          <main>
            <MainDiv>
              <Botao>Estatisticas de Ganho</Botao>
              <Botao>Regioes Preferidas</Botao>
              <Botao>Horas Trabalhadas Período</Botao>
              <Botao>Meus Dados</Botao>
              <Botao>Relatorio de Avaliacoes</Botao>
            </MainDiv>
          </main>
          <footer>
            <FooterDiv>
              <img className='fotologo' src={inclusi} width={300} heigth={100} />
            </FooterDiv>
          </footer>
        </BodyMotorista>
      </Principal>
    </>
  )
}