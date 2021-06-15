import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddInvest from './pages/AddInvest';
import AllInvest from './pages/AllInvest';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Listar-Investimento">
                    <AllInvest />
                </Route>
                <Route path="/Cadastrar-Investimento">
                    <AddInvest />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;