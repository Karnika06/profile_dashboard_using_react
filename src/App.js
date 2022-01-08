import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Mainpage } from './Components/Mainpage';
import ViewportProvider from "./viewport/Viewportprovider";
import Navbar from "./Components/Navbar";

function App() {

  return (
    <>
    <ViewportProvider>
      <Navbar/>
      <Mainpage/>
    </ViewportProvider>
    </>
  );

}

export default App;