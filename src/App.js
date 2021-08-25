import React from 'react';
import Home from './Pages/Home'
import { Store } from './Store/store';
import PokemonPage from './Pages/pokemonPage'
import Favorite from './Pages/Favorites';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {HeaderBar} from './components';
import styled from 'styled-components';
import CardPage from './Pages/cardPage';

const Backgorund = styled.div`
  background-color:rgba(162, 160, 168, 1);
  height:100vh;
`
const HeaderDiv = styled.div`
  padding-top:1rem;
`


const App = ()=> {


  return (
    <Backgorund>
    <Store>
      <Router>
        <HeaderDiv>
          <HeaderBar></HeaderBar>
        </HeaderDiv>
        <Switch>
          <Route path="/pokemon">
            <PokemonPage></PokemonPage>
          </Route>
          <Route path="/favorites">
            <Favorite />
          </Route>
          <Route path="/cartas">
            <CardPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Store>
    </Backgorund>

  );
}

export default App;
