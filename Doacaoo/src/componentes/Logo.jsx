import logo from '../imgs/logo.png'
import '../styles/Logo.css'

export default function Logo() {
  return (
    <div className='div-logo'>
      <img src={logo} alt='Logo' />
    </div>
  )
}