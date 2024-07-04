import Logo from '../imgs/imgAtendimento.png'
import Main from './Main'
import styled from 'styled-components'
import { Hamburguer } from './Hamburguer'

const Principal = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: -2;
`

const Alinha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default function Header(){
  return(
    <>
      <>
       <Hamburguer />
      </>
      <Alinha>
        <Principal>
        <header>
          <div id="divTitulo">
            <h1> Tech Suport</h1>
          </div>
          <div id="divImagemAtendimento">
            <img src={Logo} id="imgAtendimento"/>
          </div>
          <Main/>
        </header>
          </Principal>
      </Alinha>
    </>
  )
}