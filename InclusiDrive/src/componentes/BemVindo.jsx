import "../styles/BemVindo.css";
import { Link } from 'react-router-dom'

export default function BemVindo() {
  return (
    <div>
      <div className='div-bemvindo'>
        <h1>SEJA BEM VINDO !</h1>
        <h2>ENTRE PARA A NOSSA
          COMUNIDADE E ESCOLHA QUE
          TIPO DE PARCEIRO QUER SER
        </h2>
      </div>
      <div className="button-bemvindo">
        <Link to="/cadastro/passageiro">
          <button>PASSAGEIRO</button>
        </Link>
        <Link to="/cadastro/motorista">
          <button>MOTORISTA</button>
        </Link>
      </div>
      <div className="clique-aqui">
        <h3 style={{ color: "white" }}>JÁ É PARCEIRO ?
          <Link to="/entrar" style={{ color: "white" }}> Clique aqui</Link>
        </h3>
      </div>
    </div>
  )
}