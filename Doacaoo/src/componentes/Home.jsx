import '../styles/Home.css'
import cachorroegato from '../imgs/cachorroegato.jpg'
import cachorroegato2 from '../imgs/cachorroegato2.webp'
import fotodepoimento from '../imgs/fotodepoimento.jpg'
import Header from '../componentes/Header'
import Rodap from '../componentes/Footer'
export default function Home() {
  return (
    <div >
      <div>
        <Header />
      </div>
      <div className="layoutfoto" />
      <div className="foto1">
        <img className='foto001' src={cachorroegato} width={'100%'} alt='fundosite' />
        <div className="cont">
          <p className="p1">
            Adote um animalzinho!
          </p>
          <p className="p2">
            Adoce seu coração,pratique a adoção,
          </p>
          <p className="p3">
            adore um cão, ADOTE!
          </p>
        </div>
      </div>
      <div className="conteiner3">
        <div className="layout3">
          <div className="img3start">
            <img src={cachorroegato2} width={'100%'} alt='foto2' />
          </div>
          <div className="colum2">
            <p className="p7">
              CONHEÇA NOSSA HISTORIA
            </p>
            <p className="p4">
              Somos uma empresa voltada aos cuidados de animais de rua, buscamos resgatalos e reinseri-los a familias
              que
              irão amalos e tratalos como com carinho e amor, estamos atuando a cerca de 1 més e estamos buscando
              revolucionar a forma como as pessoas observam e tratam os animais de rua.
            </p>
          </div>
        </div>
      </div>
      <div className="conteiner4">
        <div className="layout4">
          <img className='foto004' src={fotodepoimento} alt='fotodepoimento' />
          <div className="colum">
            <p className="p6">Depoimentos:</p>
            <p className="p5">
              Ao decorrer de anos havia buscado uma empresa que viesse atender as espectativas ao nos relacionarmos com
              animais e a Adote Pets é esta empresa, quando mais precisei consegui auxilio no tratamento de um cachorro
              que estava prester a vir a obito,obrigado Adote Pets!!.
            </p>
          </div>
        </div>
      </div>
      <div className="conteiner5">
        <div className="conteudo">
          <Rodap />
        </div>
      </div>
    </div>
  )
}