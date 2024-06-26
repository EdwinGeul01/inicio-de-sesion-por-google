import { useState } from "react";
import "./App.css";
import { GoogleLoginTap } from "./componentes/Google-provider";
import { googleLogout } from "@react-oauth/google";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Inicio de Sesion con Google 🐧</h1>
      <GoogleLoginTap />
      {/* <button onClick={googleLogout}>Cerrar Sesion</button> */}
    </>
  );
}

export default App;
