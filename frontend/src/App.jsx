import './App.css'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import ItemList from "./components/ItemList/ItemList"
import Cadastro from "./components/Cadastro/Cadastro"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ItemList />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App
