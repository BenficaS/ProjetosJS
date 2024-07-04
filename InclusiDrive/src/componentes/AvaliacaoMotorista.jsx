import imagem from '../imgs/gabriel.jpg'
import Star from './Star'
import '../styles/Avaliacao.css'
import inclusi from '../imgs/logo.png'
import styled from 'styled-components'
import { Hamburguer } from './Hamburguer'

const Principal = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: -2;
`

export default function AvaliacaoMotorista() {
  return (
    <>
      <>
       <Hamburguer />
      </>
      <Principal>
      <div id = 'body-motorista'>
        <header className='div-header'>
          <h1 id='form-h1'>AVALIE SUA ULTIMA CORRIDA COM NOSSO PARCEIRO:</h1>
          <div id='cont-foto'>
            <img className='fotomotorista' src={imagem} width={120} heigth={100} />
            <div id='form-m'>
              <h2 id='form-h2'>Gabriel Benfica</h2>
              <h2 id='form-h2-moto'>Motorista Parceiro</h2>
            </div>
          </div>
        </header>
        <nav id='nav-cont'>
          <button type='submit'>MARQUE SUA AVALIAÇÃO</button>
        </nav>
        <div id='div-star'>
          <Star id='star' />
        </div>
        <div id='div-rb'>
          <h1 id='R'>Ruim</h1>
          <h1 id='R'>Bom</h1>
        </div>
        <main id='id-main-cont'>
          <div id='cont-P' >
            <h1 id='P'>TEVE ALGUM PROBLEMA ESPECIFICO?</h1>
            <button type='submit'>RELATE AQUI</button>
          </div>
        </main>
        <footer>
          <div>
            <img className='fotologo' src={inclusi} width={300} heigth={100} />
          </div>
        </footer>
      </div>
        </Principal>
      </>
  )
}
