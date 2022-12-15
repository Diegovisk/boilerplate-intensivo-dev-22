import './App.css'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content container mb-3 mt-3">
        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App
