import ImgW from '../imgs/imgWhatsapp.png'
import '../styles/TechSuport.css'
import { Hamburguer } from './Hamburguer'

export default function Main(){

  return(
    <div id="div">
      <div id="conjuntoNome">
        <h3 id="nome"> Nome</h3>
        <input class="campoFormulario" type="text"></input>
      </div>
      <div id="conjuntoEmail">
        <h3> E-mail:</h3>
        <input class="campoFormulario" type="text"></input>
      </div>   
      <div id="conjuntoTelefone">
        <h3> Número de Telefone:</h3>
        <input class="campoFormulario" type="text"></input>
      </div>
      <div id="conjuntoDescricao">
        <h3> Descrição do Problema:</h3>
        <input id="formDescricao"class="campoFormulario" type="text"></input>
      </div>
      <footer>
        <button id="botaoEnviar">Enviar</button>
      </footer>
      <div id="conjuntoImagem">
        <img id="imgWhatsapp" src={ImgW}/>
      </div>
    </div>
  )
}