import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const binary = useRef();
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (binary.current !== undefined) {
      if (!binary.current.match("^[0-1]+$")) {
        setErr("Números binários só podem conter 0 e 1");
        setMessage("");
      } else {
        setErr("");
        setMessage(
          `O valor digitado em decimal é ${parseInt(binary.current, 2)}`
        );
      }
    } else {
      setErr("O campo está vazio. Digite um número binário para prosseguir");
      setMessage("");
    }
  }

  return (
    <div className="App">
      <h1>Conversor binário para decimal</h1>
      <small>
        O sistema binário ou de base 2 é um sistema de numeração posicional em
        que todas as quantidades se representam com base em dois números, ou
        seja, zero e um (0 e 1).
      </small>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Digite um valor em binário: </label>

        <input
          defaultValue={binary.current}
          class="input-text"
          type="text"
          name="binary"
          id="binary"
          onChange={e => (binary.current = e.target.value)}
        />
        <button className="submit-button" type="submit">
          Converter!
        </button>
        <label className="error-message" style={{ color: "red" }}>
          {err}
        </label>
        <h3>{message}</h3>
      </form>
    </div>
  );
}

export default App;
