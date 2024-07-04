import {useState, useRef} from 'react'
/*https://replit.com/@TarleyLana#src/index.jsx*/

import JogoHeader from './componentes/JogoHeader'
import JogoForm from './componentes/JogoForm'

import './App.css'

export default function App() {
  const [tentativas, setTentativas] = useState(10)
  const [mensagem, setMensagem] = useState('')
  const [tipoMsg, setTipoMsg] = useState('sucesso')
  const inputText = useRef(null)

  const validarPalpite = () => {
    const value = Number(inputText.current.value)

    if(value < 1 || value > 100) {
      setMensagem('Valor inválido. O valor deve estar entre 1 e 100.')
      setTipoMsg('erro')
    } else {
      setMensagem('Parabéns! Você acertou')
      setTipoMsg('sucesso')
    }
  }

  return (
    <>
     <JogoHeader tentativas={tentativas} cor='tomato' />
      <JogoForm onPress={validarPalpite} inputRef={inputText}/>
      <p className={tipoMsg}>{mensagem}</p>
    </>
  )
}