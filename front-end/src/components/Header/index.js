import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="d-flex justify-content-center bg-dark">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center align-items-center al py-3">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 ps-4 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-2 text-white">My Investment</span>
          </Link>
          <div className="">
            <ul className="nav nav-pills">
              <li className="">
                <Link className="btn btn-primary" to="/Cadastrar-Investimento">
                  Cadastrar Investimento
                </Link>
              </li>
              <li className="ps-3">
                <Link className="btn btn-primary" to="/Listar-Investimento">
                  Listar Investimentos
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;