import Footer from "../../components/Footer";
import Header from "../../components/Header";

function AllInvest() {
  return (
    <>
      <Header />
      <div className="container">

      <h2 class="mb-4 mt-5 ps-2">INVESTIMENTOS</h2>
      
      <hr class="my-4" />

        <table class="table table-striped table-hover align-middle">
          <thead>
            <tr class="table-dark">
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Quantia</th>
              <th scope="col">Valor (R$)</th>
              <th scope="col">Data</th>
              <th scope="col">Tipo</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <th scope="row">1</th>
              <td>ITSA4F</td>
              <td>3</td>
              <td>10,69</td>
              <td>26/05/2021</td>
              <td>Acao</td>
              <td>
                <button className="btn btn-danger d-flex flex-wrap justify-content-center btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>ITSA4F</td>
              <td>3</td>
              <td>10,69</td>
              <td>26/05/2021</td>
              <td>Acao</td>
              <td>
                <button className="btn btn-danger d-flex flex-wrap justify-content-center btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>ITSA4F</td>
              <td>3</td>
              <td>10,69</td>
              <td>26/05/2021</td>
              <td>Acao</td>
              <td>
                <button className="btn btn-danger d-flex flex-wrap justify-content-center btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>ITSA4F</td>
              <td>3</td>
              <td>10,69</td>
              <td>26/05/2021</td>
              <td>Acao</td>
              <td>
                <button className="btn btn-danger d-flex flex-wrap justify-content-center btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default AllInvest;