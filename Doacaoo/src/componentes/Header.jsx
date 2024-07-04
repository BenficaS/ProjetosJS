import Logo from '../componentes/Logo'
import '../styles/Headers.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <div className='div-layout'>
        <div className='div-menu'>
          <Logo />
        </div>
        <div className="div-conteiner">
          <Link to="/Home">
            <h1>HOME</h1>
          </Link>
          <Link to="/Sobrenos">
            <h1>SOBRENOS</h1>
          </Link>
          <Link to='/Galeria'>
            <h1>GALERIA </h1>
          </Link>
          <a href='https://doapet.com.br/'>
            <h1>ADOTE PARCEIROS</h1>
          </a>
        </div>
      </div>
    </div>
  )
}