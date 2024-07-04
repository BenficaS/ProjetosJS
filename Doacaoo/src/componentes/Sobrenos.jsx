import sobrenos1 from '../imgs/sobrenos1.jpg';
import Header from '../componentes/Header';
import '../styles/Sobrenos.css'
import Rodap from '../componentes/Footer'

export default function Sobrenos() {
  return (
    <div>
        <Header />
      <main>
        <nav class="conteiners">
          <div class="image-container">
            <img src={sobrenos1} width={'100%'} />
            <div class="overlay">
              <h1 class="layout10">ADOTE PETS é uma empresa voltada aos cuidados dos animais, estamos no mercado a 3 meses,
                junto a empresas parceiras estamos desenvolvendo um método eficiente e tecnológico visando tratá-los com
                dignidade e carinho.</h1>
              <h2 class="layout11">Todos os veterinários parceiros são devidamente avaliados e certificados para o melhor
                auxílio aos nossos animais!</h2>
              <h3 class="layout12">Se você é o dono ideal e se enquadra no perfil que buscamos de: Responsável, Carinhoso,
                Altruísta. ADOTE!.</h3>
            </div>
          </div>
        </nav>
      </main>
      <footer>
        <Rodap />
      </footer>
    </div>
  )
}