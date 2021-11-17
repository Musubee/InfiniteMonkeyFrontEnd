import React from "react";
import { Grommet } from "grommet";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Grommet plain>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
    </Grommet>
  );
}

export default App;