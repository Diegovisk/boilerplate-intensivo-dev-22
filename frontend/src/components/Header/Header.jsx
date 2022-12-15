import MarcaOcean from "../../assets/brand.svg";
import "./Header.css"

function Header() {
  return (
    <header className="cabecalho">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2">
            <img src={MarcaOcean} alt="" style={{ height: 50 }} />
          </div>
          <div className="col-10">
            <a className="link">Link 1</a>
            <a className="link">Link 2</a>
            <a className="link">Link 3</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
