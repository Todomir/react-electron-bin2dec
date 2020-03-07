import React, { useState, useRef } from "react";
import Switch from "./components/Switch";
import "./App.css";

function App() {
  const ref = useRef();
  const [err, setErr] = useState("");
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    switch (toggle) {
      case false:
        if (ref.current !== undefined) {
          if (!ref.current.match("^[0-1]+$")) {
            setErr("Números binários só podem conter 0 e 1");
            setMessage("");
          } else {
            setErr("");
            setMessage(
              `O valor digitado em decimal é ${parseInt(ref.current, 2)}`
            );
          }
        } else {
          setErr(
            "O campo está vazio. Digite um número binário para prosseguir"
          );
          setMessage("");
        }
        break;
      case true:
        if (!isNaN(ref)) {
          setErr("O valor digitado não é um número");
        } else {
          setErr("");
          setMessage(
            `O valor digitado em binário é ${(+ref.current).toString(2)}`
          );
        }
        break;
      default:
        setErr("Como raios você chegou aqui?");
    }
  }

  return (
    <div className="App">
      <h1>
        Conversor {toggle ? "decimal" : "binário"} para{" "}
        {toggle ? "binário" : "decimal"}:{" "}
      </h1>
      <small>
        O sistema binário ou de base 2 é um sistema de numeração posicional em
        que todas as quantidades se representam com base em dois números, ou
        seja, zero e um (0 e 1).
      </small>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Digite um valor em {toggle ? "decimal" : "binário"}:{" "}
        </label>

        <input
          defaultValue={ref.current}
          class="input-text"
          type="text"
          name="ref"
          id="ref"
          onChange={e => (ref.current = e.target.value)}
        />
        <button className="submit-button" type="submit">
          Converter!
        </button>
        <label className="error-message" style={{ color: "red" }}>
          {err}
        </label>
        <h3>{message}</h3>
      </form>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Switch isOn={toggle} handleToggle={() => setToggle(!toggle)} />{" "}
        <label style={{ marginLeft: 10 }}> Decimal para binário</label>
      </div>
    </div>
  );
}

export default App;
