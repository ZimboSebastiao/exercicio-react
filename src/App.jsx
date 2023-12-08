import Home from "./pages/Home";
import Classico from "./pages/Classico";
import Heavy from "./pages/Heavy";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Classico} path="/classic" />
            <Route Component={Heavy} path="/heavy" />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
