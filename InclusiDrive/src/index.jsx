import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Passageiro from './cadastro/Passageiro'
import Entrar from './Entrar'
import Motorista from './cadastro/Motorista'
import RecuperaSenha from './cadastro/RecuperaSenha'
import TelaCorrida from './TelaCorrida'
import MotoristaG from './componentes/MotoristaG'
import AvaliacaoMotorista from './componentes/AvaliacaoMotorista'
import Servico from './componentes/Servico'
import HeaderAtendimento from './componentes/HeaderAtendimento'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cadastro/passageiro",
    element: <Passageiro />
  },
  {
    path: "/entrar",
    element: <Entrar />
  },
  {
    path: "/cadastro/motorista",
    element: <Motorista />
  },
  {
    path: "/cadastro/recuperasenha",
    element: <RecuperaSenha />
  },
  {
    path: "/home",
    element: <TelaCorrida />
  },
  {
    path: "/perfil",
    element: <MotoristaG />
  },
  {
    path:"/avaliacao",
    element: <AvaliacaoMotorista/>
  },
  {
    path:"/servico",
    element: <Servico/>
  },
  {
    path:"/suporte",
    element: <HeaderAtendimento/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);