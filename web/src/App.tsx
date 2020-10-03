import React from "react";
import logo from "./logo.svg";
import "./App.css";

const oi = "asd";

const aluno = {
  nome: "Mariana",
  idade: 20,
};
const alunoB = {
  nome: "Daniel",
  idade: 21,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
{' '}
and save to reload.
</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
