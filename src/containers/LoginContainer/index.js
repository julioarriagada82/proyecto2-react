import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login as loginCreator } from '../../redux/users/thunks'

const LoginContainer = props => {
  const {
    login,
    error,
    loading,
    users
  } = props

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const {
      name,
      value
    } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(users)

    login(values.email, values.password)
  }

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            required
            type="email"
            name='email'
            className="form-control"
            value={values['']}
            onChange={handleChange}
            aria-describedby="emailHelp" 
            placeholder="Ingrese email"
            />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name='password'
            className="form-control"
            value={values['']}
            onChange={handleChange}
            placeholder="Password"
            />
        </div>
        {error && <div className="alert alert-warning" role="alert">{error}</div>}
        {!loading && <button type='submit' className="btn btn-primary">Login</button>}
        <Link to='/register' className="btn btn-secundary">Registrarse</Link>
      </form>
    </div>
    )
}

const mapStateToProps = state => {
  const {
    loading,
    error,
    users
  } = state.users

  return {
    loading,
    error,
    users
  }
}

const mapDispatchToProps = {
  login: loginCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
