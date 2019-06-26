const GET_EPISODES_REQUEST = 'GET_EPISODES_REQUEST'
const GET_EPISODES_SUCCESS = 'GET_EPISODES_SUCCESS'
const GET_EPISODES_ERROR = 'GET_EPISODESS_ERROR'

export const getEpisodeRequest = () => ({ type: GET_EPISODES_REQUEST })

export const getEpisodeSuccess = response => {
  const {
    info,
    episodes
  } = response

  return {
    type: GET_EPISODES_SUCCESS,
    payload: {
      info,
      episodes
    }
  }
}

export const getEpisodeError = error => ({
  type: GET_EPISODES_ERROR,
  payload: {
    error
  }
})

const initialState = {
  infoApi: {
    count: 0,
    pages: 0,
    next: 'https://rickandmortyapi.com/api/episode/',
    prev: '',
    currentPage: 0
  },
  episodes: [],
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }

    case GET_EPISODES_SUCCESS: {
      const { episodes, info } = action.payload

      const {
        pages,
        next,
        prev,
        count
      } = info

      return {
        ...state,
        infoApi: {
          ...state.infoApi,
          pages,
          next,
          prev,
          count,
          currentPage: state.infoApi.currentPage + 1
        },
        loading: false,
        episodes: [...state.episodes, ...episodes],
        error: null
      }
    }

    case GET_EPISODES_ERROR: {
      const { error } = action.payload

      return {
        ...state,
        loading: false,
        error
      }
    }

    default: return state
  }
} 
