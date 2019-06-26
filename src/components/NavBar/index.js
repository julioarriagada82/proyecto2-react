import React from 'react'
import { connect } from 'react-redux'
import { NavLink , Redirect} from 'react-router-dom'
import { logout as logoutCreator } from '../../redux/users/thunks'

const NavBar = props => {
    const {
        logout,
        loggedOut
      } = props

    const handleSubmit = (event) => {
        event.preventDefault()
        logout()
      }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">The Rick and Morty</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/' exact={true} activeClassName="active" className="nav-link">Ir a Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/characters' exact={true} activeClassName="active" className="nav-link" >Ver Personajes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/episodes' exact={true} activeClassName="active" className="nav-link" >Ver Episodios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/comparisons' exact={true} activeClassName="active" className="nav-link">Comparaciones</NavLink>
                        </li>
                </ul>
            </div>
            <form className="form-inline" onSubmit={handleSubmit}>
                <button type='submit' className="btn btn-danger">Logout</button>
            </form>
            {loggedOut && <Redirect push to="/login"/> }
        </nav>
    )
  }
  
  const mapStateToProps = state => {
    const {
      loading,
      error,
      loggedOut,
      users
    } = state.users
  
    return {
      loading,
      error,
      loggedOut,
      users
    }
  }
  
  const mapDispatchToProps = {
    logout: logoutCreator
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar)