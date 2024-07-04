import React, { useEffect } from 'react'
import Logo from './componentes/Logo'
import user from './imgs/user.png'
import './styles/Entrar.css'
import { Link } from 'react-router-dom'
import InputComponent from './componentes/InputComponent'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import { insert, findAll } from './cadastro/CadastroApi'

export default function Entrar() {
  const navigate = useNavigate()
  const URL = 'https://user-api.tarleylana.repl.co/users'
  const [token, setToken] = useState([]);

  useEffect(() => {
    pesquisar()
  }, [])

  const pesquisar = async () => {
    const tokens = await findAll()
    console.log(tokens);
    setToken(tokens)
  }

  const inputTel = useRef()
  const inputSenha = useRef()

  const realizarLogin = () => {
    const telefone = inputTel.current.value;
    const senha = inputSenha.current.value;

    console.log(telefone, senha);
    console.log(token);

    const usuarioEncontrado = token.find((c) => String(c.telefone) == telefone && c.senha == senha);

    if (usuarioEncontrado) {
      alert('Bem vindo parceiro !!');
      navigate('/home');
    } else {
      alert('Telefone ou senha inválidos');
    }
  }
  return (
    <section className='sec-entrar'>
      <div className='div-logo'>
        <Logo />
      </div>
      <div className='div-entrar'>
        <img style={{
          width: '120px',
          height: '120px'
        }} src={user} alt="user" />
      </div>
      <div className='div-input'>
        <InputComponent ref={inputTel} placeHolderText="Telefone" />
        <InputComponent ref={inputSenha} placeHolderText="Senha" />
      </div>
      <div>
        <Link to="/cadastro/recuperasenha" className="link">
          <h1 id="esqueceu">Esqueceu a senha ?</h1>
        </Link>
      </div>
      <div className='div-entrar'>
        <button id="entrar" onClick={realizarLogin}>ENTRAR</button>
        <Link to="/" className="link">
          <h1 id='criar'>Ainda não possui uma conta ?</h1>
        </Link>
      </div>
    </section>
  )
}