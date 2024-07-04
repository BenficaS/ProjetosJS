import React, { useState } from 'react';
// import './TelaCorrida.css';
import Menu from './componentes/Menu';
import { Corrida } from './componentes/Corrida';
import { Pagamento } from './componentes/Pagamento';
import styled from 'styled-components';
import { Mapa } from './componentes/Mapa';
import { ChamarCorrida } from './componentes/ChamarCorrida';
import { Hamburguer } from './componentes/Hamburguer'

const Principal = styled.div`
position: absolute;
top: 0;
left: 0;
z-index: -2;
`

function TelaCorrida() {
  
  const [zoom, setZoom] = useState(false);

  return (
    <>
      <>
       <Hamburguer />
      </>
    <Principal>
    <div className="TelaCorrida">
      <header className="TelaCorrida-header">
        <Mapa zoom={zoom} />
      </header>
      <Corrida /> 
      <ChamarCorrida />
      <Pagamento />
    </div>
        </Principal>
      </>
  );
}

export default TelaCorrida;