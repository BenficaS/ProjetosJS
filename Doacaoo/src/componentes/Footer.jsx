import '../styles/Footer.css'
import logo from '../imgs/logo.png'
export default function Footer() {
  return (
    <div>
      <div className='layout-footer'>
        <div className='conteiner-footer'>
          <h1>
            Fale Conosco: 31-9928-4423
          </h1>
          <h1>
            Email: Adocao@gmail.com
          </h1>
        </div>
        <div className='conteiner-footer1'>
          <img src={logo} />
          <h1>Doe: Sua doação pode salvar 1 cão.</h1>
        </div>
      </div>
    </div>
  )
}
