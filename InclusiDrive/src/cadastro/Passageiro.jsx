import '../styles/Passageiro.css'
import Logo from '../componentes/Logo'
import usuario from '../imgs/usuario.png'
import InputComponent from '../componentes/InputComponent'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { insert } from './CadastroApi'

export default function Passageiro() {
  const navigate = useNavigate()

  const inputNome = useRef()
  const inputCpf = useRef()
  const inputTel = useRef()
  const inputSenha = useRef()

  const salvar = async () => {
    const nome = inputNome.current.value
    const cpf = inputCpf.current.value
    const telefone = inputTel.current.value
    const senha = inputSenha.current.value

    await insert({ nome, cpf, telefone, senha })
    alert('Cadastro realizado com sucesso!')

    navigate('/entrar')
  }
  return (
    <main>
      <Logo />
      <div className="div-user-pass">
        <img style={{ width: '120px', height: '120px' }} src={usuario} alt="user" />
      </div>
      <div className="div-registrar-pass">
        <InputComponent ref={inputNome} placeHolderText="Nome" />
        <InputComponent ref={inputCpf} placeHolderText="CPF" />
        <InputComponent ref={inputTel} placeHolderText="Telefone" />
        <InputComponent ref={inputSenha} placeHolderText="Senha" />
        <button className="cadastrar-but-pass" onClick={() => { salvar(); navigate('/entrar'); }}>CADASTRAR</button>
      </div>
    </main>
  )
}