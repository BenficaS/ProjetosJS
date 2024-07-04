export default function JogoHeader({cor='red', tentativas=10}) {
  return (
    <>
      <h1 style={{color: cor}}>Jogo Adivinhe um número</h1>
      <p>
        Selecionamos um número aleatório entre 1 e 100.
        Veja se consegue adivinhar em 10 chances ou menos.
        Lhe diremos se seu palpite está com valor alto ou baixo.
      </p>
      <strong>Tentativas restantes: {tentativas}</strong>
    </>
  )
}