import Header from '../componentes/Header'
import '../styles/Galeria.css'
import Footer from '../componentes/Footer'
import a1 from '../imgGaleria/animal1.jpg'
import a2 from '../imgGaleria/animal2.jpeg'
import a3 from '../imgGaleria/animal3.jpg'
import a4 from '../imgGaleria/animal4.jpg'
import a5 from '../imgGaleria/animal5.jpg'
import a6 from '../imgGaleria/animal6.jpg'
import fundo from '../imgGaleria/fundo.jpg'

export default function Galeria() {
  return (
    <div>
      <Header />
      <main className='main-container'>
        <div className='fundo'>
          <img id='fundo-imagem' src={fundo} alt='background' />
        </div>
        <div className='conteinerg'>
         
        <div className='conteinerg-interno'>
          <img id='imageG' src={a1} alt='animal' />
          <h1 id='h1-conteiner'>Este Jonas e está aguardando por você.</h1>
        </div>
        <div className='conteinerg-interno'>
          <img id='imageG' src={a2} alt='animal' />
          <h1 id='h1-conteiner'>Este Carlos e está a sua espera.</h1>
        </div>
        <div className='conteinerg-interno'>
          <img id='imageG' src={a3} alt='animal' />
          <h1 id='h1-conteiner'>Este Ruby e está aguardando por você.</h1>
        </div>
        </div>
          <div className='conteinerg'>
        <div className='conteinerg-interno'>
          <img id='imageG' src={a4} alt='animal' />
          <h1 id='h1-conteiner'>Este Ricardo e está aguardando por você.</h1>
        </div>
        <div className='conteinerg-interno'>
          <img id='imageG' src={a5} alt='animal' />
          <h1 id='h1-conteiner'>Este Nomade e está aguardando por você.</h1>
        </div>
        <div className='conteinerg-interno'>
          <img id='imageG' src={a6} alt='animal' />
          <h1 id='h1-conteiner'>Este Boby e está aguardando por você.</h1>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}