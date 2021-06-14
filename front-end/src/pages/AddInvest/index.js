import Header from "../../components/Header";
import Footer from "../../components/Footer";

function AddInvest() {
  return (
    <>
    <Header />

    <main>
      <div className="container">
        <div className="">
          <h2 className="mb-4 mt-5 ps-2">CADASTRAR INVESTIMENTO</h2>
          <hr className="my-4" />

          <div className="d-flex justify-content-center row">

          <form className="needs-validation" novalidate="">
            <div className="ps-5">
              
              <div className="col-7 mt-1">
                <label for="name" className="form-label">Código:</label>
                  <input type="text" className="form-control" id="name" placeholder="Digite o código" required="true"/>
                <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>

              <div className="col-7 mt-3">
                <label for="amount" className="form-label">Quantidade:</label>
                <div className="input-group has-validation">
                  <input type="number" className="form-control" id="amount" placeholder=" Digite a quantidade" required="true"/>
                <div class="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div class="col-7 mt-3">
                <label for="value" className="form-label">Valor (R$):</label>
                <input type="number" className="form-control" id="value" placeholder=" Digite o valor da compra" required=""/>
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-7 mt-3">
                <label for="date" className="form-label">Data:</label>
                <input type="date" className="form-control" id="date"/>
              </div>

              <div className="col-7 my-3">
                <label for="category" className="form-label">Categoria:</label>
                <select className="form-select" id="category" required="true">
                  <option value="">Escolha ...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="d-flex justify-content-center">
              <button className="w-50 btn btn-primary btn-lg" type="submit">Cadastrar</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default AddInvest;
