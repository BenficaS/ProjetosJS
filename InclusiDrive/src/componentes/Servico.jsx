import logo from '../imgs/logo.png'
// import '../styles/Servico.css'
import agenda from '../imgs/agenda.png'
import adapt from '../imgs/adapt.png'
import pontos from '../imgs/pontos.png'
import viagens from '../imgs/viagens.png'
import styled from 'styled-components'
import { Hamburguer } from './Hamburguer'

const H2 = styled.h2`
font-family:'Poppins-Regular';
color:white;
font-size:15px;
text-align:center; 
`
const H1 = styled.h1`
font-size:15px;
font-family:'Poppins-Regular';
`
const BodyServico = styled.div`
width:400px;
margin:0px;
`

const Titulo = styled.h1`
color: white;
`

const Cont1 = styled.div`
display:flex;
justify-content:space-around;
`
const Cont2 = styled.div`
  display:flex;
  justify-content:space-around;
  margin-top:30px;
`

const Cont3 = styled.div`
 display:flex;
  justify-content: space-around;
  margin-top:30px;
`

const ContInterno = styled.div`
display:flex;
flex-direction:column;
width:40px;
align-items:center;
padding-leftt:20px;
`

const HeaderDiv = styled.div`
display:flex;
align-content:center;
text-align: center;
flex-direction:column;
align-items:center;
`

const Principal = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: -2;
`
export default function Servico() {
  return (
    <>
      <>
       <Hamburguer />
      </>
      <Principal>
      <BodyServico>
        <header>
          <HeaderDiv>
            <img src={logo} alt='Logo' />
            <Titulo>Serviços</Titulo>
          </HeaderDiv>
        </header>
        <main>
          <div>
            <Cont1>
              <ContInterno>
                <img src={agenda} width={80} alt='logo agenda' />
                <H2>Agendar Corrida</H2>
              </ContInterno>
              <ContInterno>
                <img src={adapt} width={80} alt='logo adapt' />
                <H2 id='H2-opcoes'>Opções de Adaptações</H2>
              </ContInterno>
            </Cont1>
          </div>
          <Cont2></Cont2>
          <Cont3>
            <ContInterno>
              <img src={viagens} width={80} alt='logo viagens' />
              <H2>Minhas Viagens</H2>
            </ContInterno>
            <ContInterno>
              <img src={pontos} width={80} alt='logo pontos' />
              <H2>Pontos Acumulados</H2>
            </ContInterno>
          </Cont3>
        </main>
      </BodyServico>
      </Principal>
    </>
  )
}