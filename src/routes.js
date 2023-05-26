import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Livros from './pages/Livro';
import novoLivro from './pages/novoLivro';

export default function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/Livros" component={Livros}/>
            <Route path="/livro-novo" component={novoLivro}/>
        </Switch>
    </BrowserRouter>
    );
}