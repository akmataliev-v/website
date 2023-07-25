import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./components/header";

function App() {
  return (
    <>
      <header id="header">
        <AppHeader />
      </header>
    </>
  );
}

export default App;
