const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_ERROR = 'LOGIN_ERROR'

const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
const LOGOUT_ERROR = 'LOGOUT_ERROR'

const ADD_USER_REQUEST = 'ADD_USER_REQUEST'
const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
const ADD_USER_ERROR = 'ADD_USER_ERROR'

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const loginSuccess = userId => ({
  type: LOGIN_SUCCESS,
  payload: {
    userId
  }
})

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: {
    error
  }
})

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST
})

export const logoutSuccess = userId => ({
  type: LOGOUT_SUCCESS,
  payload: {
    userId
  }
})

export const logoutError = error => ({
  type: LOGOUT_ERROR,
  payload: {
    error
  }
})

export const addUserRequest = () => ({
  type: ADD_USER_REQUEST
})

export const addUserSuccess = ({
  name, password, email, id
}) => ({
  type: ADD_USER_SUCCESS,
  payload: {
    name,
    password,
    email,
    id
  }
})

export const addUserError = error => ({
  type: ADD_USER_ERROR,
  payload: {
    error
  }
})

const initialState = {
  users: {
    '1': {
      name: 'Julio Arriagada',
      password: '123',
      email: 'julioarriagada@gmail.com',
      favoriteCharacters: ['1', '2'],
      favoriteEpisodes: ['3', '4']
    },
    '2': {
      name: 'Usuario Prueba',
      password: '123',
      email: 'usuario@rm.com',
      favoriteCharacters: ['5', '6'],
      favoriteEpisodes: ['7', '8']
    }
  },
  userList: ['1', '2'],
  loggedIn: null,
  loggedOut: false,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: action.payload.userId,
        loading: false,
        error: null
      }
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case LOGOUT_SUCCESS: {
      return {
        ...state,
        loggedIn: null,
        loggedOut: true,
        loading: false,
        error: null
      }
    }

    case LOGOUT_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    }


    case ADD_USER_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case ADD_USER_SUCCESS: {
      const {
        id,
        name,
        email,
        password
      } = action.payload

      return {
        ...state,
        users: {
          ...state.users,
          [id]: {
            name,
            email,
            password,
            favoriteCharacters: [],
            favoriteEpisodes: []
          }
        },
        userList: [...state.userList, id],
        loading: false,
        error: null
      }
    }

    case ADD_USER_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    }
    default: return state
  }
}