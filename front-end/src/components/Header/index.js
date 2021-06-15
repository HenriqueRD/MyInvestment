import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark py-3">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link to="/" className="text-decoration-none">
                  <span className="text-white fs-2">MyInvestment</span>
                </Link>
              </li>
            </ul>
            
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarButtonsExample">

              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <span></span>
                </li>
              </ul>

              <div className="d-flex align-items-center">
                  <Link className="btn btn-primary" to="/Cadastrar-Investimento">
                    Cadastrar
                  </Link>
                  <div className="px-3">
                    <Link className="btn btn-primary px-3" to="/Listar-Investimento">
                      Investimentos
                    </Link>
                  </div>
                  <Link className="btn btn-primary" to="/Estatistica-Investimento">
                    Estatísticas
                  </Link>
              </div>

            </div>

          </nav>

        </div>
      </div>
    </div>
  );
}

export default Header;
