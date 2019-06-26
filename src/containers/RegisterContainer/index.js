import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser as addUserCreator } from '../../redux/users/thunks'
import { Link, Redirect } from 'react-router-dom'

const RegisterContainer = props => {
  const {
    loading,
    addUser,
    error
  } = props

  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
  })

  const handleChange = (e) => {
    const {
      name,
      value
    } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addUser(values)
  }

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre usuario</label>
        <input
          required
          type="text"
          name='name'
          className="form-control"
          placeholder='Ingrese el name'
          value={values['name']}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name='email'
          className="form-control"
          placeholder='Ingrese el email'
          value={values['email']}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          name='password'
          className="form-control"
          placeholder='Ingrese el password'
          value={values['password']}
          onChange={handleChange}
        />
      </div>
        {error && <div className="alert alert-warning" role="alert">{error}</div>}
        {!loading && (
          <button className="btn btn-primary" type='submit'>
            Registrar
        </button>)}
        <Link to='/login' className="btn btn-secundary">Volver</Link>
      </form>
    </div>
  )
}

const msp = state => {
  const {
    loading,
    error
  } = state.users

  return {
    loading,
    error
  }
}

const mdp = {
  addUser: addUserCreator
}

export default connect(msp, mdp)(RegisterContainer)
