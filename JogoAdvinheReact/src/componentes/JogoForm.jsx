export default function JogoForm({onPress, inputRef}) {
  return (
    <div>
      <label>Digite seu palpite:</label>
      <input ref={inputRef} type='number' min={1} max={100} />
      <button onClick={onPress} >ENVIAR PALPITE</button>
    </div>
  )
}