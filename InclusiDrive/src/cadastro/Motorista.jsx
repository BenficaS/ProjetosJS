import '../styles/Motorista.css'
import Logo from '../componentes/Logo'
import usuario from '../imgs/usuario.png'
import InputComponent from '../componentes/InputComponent'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { insert } from './CadastroApi'

export default function Motorista() {
  const navigate = useNavigate()

  const inputNome = useRef()
  const inputCpf = useRef()
  const inputTel = useRef()
  const inputCnh = useRef()
  const inputPlaca = useRef()
  const inputSenha = useRef()

  const salvar = async () => {
    const nome = inputNome.current.value
    const cpf = inputCpf.current.value
    const telefone = inputTel.current.value
    const cnh = inputCnh.current.value
    const placa = inputPlaca.current.value
    const senha = inputSenha.current.value

    await insert({ nome, cpf, telefone, cnh, placa, senha })
    alert('Cadastro realizado com sucesso!')

    navigate('/entrar')
  }
  return (
    <div>
      <Logo />
      <div className="div-user">
        <img style={{width: '120px',height: '120px'}} src={usuario} alt="usario" />
      </div>
      <div className="div-registrar">
        <InputComponent ref={inputNome} placeHolderText="Nome"/>
        <InputComponent ref={inputCpf} placeHolderText="CPF"/>
        <InputComponent ref={inputTel} placeHolderText="Telefone"/>
        <InputComponent ref={inputCnh} placeHolderText="Nº CNH"/>
        <InputComponent ref={inputPlaca} placeHolderText="Placa do veículo"/>
        <InputComponent ref={inputSenha} placeHolderText="Senha" />
        <button className="cadastrar-but"onClick={() => { salvar(); navigate('/entrar'); }}>CADASTRAR</button>
      </div>
    </div>
  )
}