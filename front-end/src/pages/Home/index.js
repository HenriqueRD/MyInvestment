import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
        <main class="container mt-2">
            <div class="mt-5 bg-light p-5 rounded border border-3 border-dark">
                <h1>Seja bem-vindo !!!</h1>
                <p class="lead">Gerencie seus investimentos de forma totalmente prático e fácil. </p>
                <Link to="/Listar-Investimento" class="btn btn-lg btn-primary" href="/docs/5.0/components/navbar/" role="button">Ver meus Investimentos »</Link>
            </div>
        </main>
      <Footer />
    </>
  );
}

export default Home;