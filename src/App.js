import React from 'react';
import "./App.css";
import Bandas from "./components/bandas";
import NavBar from "./components/navbar";

function App({ lang }) {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Bandas></Bandas>
    </div>
  );
}

export default App;
