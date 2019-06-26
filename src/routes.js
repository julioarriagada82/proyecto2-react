import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import CharactersPage from './pages/CharactersPage'
import EpisodesPage from './pages/EpisodesPage'
import ComparisonsPage from './pages/ComparisonsPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import NotLoggedInRoute from './components/NotLoggedInRoute'
import RegisterPage from './pages/RegisterPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/proyecto2-react/' exact component={HomePage} />
        <PrivateRoute path='/proyecto2-react/characters' exact component={CharactersPage} />
        <PrivateRoute path='/proyecto2-react/episodes' exact component={EpisodesPage} />
        <PrivateRoute path='/proyecto2-react/comparisons' exact component={ComparisonsPage} />
        <NotLoggedInRoute path='/proyecto2-react/login' exact component={LoginPage} />
        <NotLoggedInRoute exact path='/proyecto2-react/register' component={RegisterPage} />
      </Switch>
    </Router>
  )
}

export default Routes
