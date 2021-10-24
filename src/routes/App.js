import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../components/styles/App.css";
import Tecnico from "../pages/Tecnico";
import E404 from "../pages/errors/E404";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RegistroCli from "../pages/RegistroCli";
import Servicio from "../pages/Servicio";
import RegistroVehiculo from "../pages/RegistroVehiculo";
import { Signup } from "../pages/Signup";
import { Signin } from "../pages/Signin";
import { Provider } from "react-redux";
import { store } from '../store';
import { comprobarToken } from '../connection/helpers/comprobarToken';
import { Navegacion } from "../layouts/Navegacion";
import { Container } from "react-bootstrap";


comprobarToken();

function App() {

    return(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Navegacion/>
            </div>
            <Container>
                <Switch>
                    <Route exact path="/" component={Servicio} />
                    <Route exact path="/login" component={Signin} />
                    <Route exact path="/registro" component={Signup} />
                    <Route exact path="/tecnico" component={Tecnico} />
                    <Route exact path="/RegistroCli" component={RegistroCli} />
                    <Route exact path="/RegistroVehiculo" component={RegistroVehiculo} />
                    <Route component={E404} />
                </Switch>
                
            </Container>
            <Footer/>
        </BrowserRouter>
    </Provider>
    );
}

export default App;