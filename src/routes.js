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
        <PrivateRoute path='/' exact component={HomePage} />
        <PrivateRoute path='/characters' exact component={CharactersPage} />
        <PrivateRoute path='/episodes' exact component={EpisodesPage} />
        <PrivateRoute path='/comparisons' exact component={ComparisonsPage} />
        <NotLoggedInRoute path='/login' exact component={LoginPage} />
        <NotLoggedInRoute exact path='/register' component={RegisterPage} />
      </Switch>
    </Router>
  )
}

export default Routes
