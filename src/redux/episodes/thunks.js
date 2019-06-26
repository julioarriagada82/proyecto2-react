import {
    getEpisodeRequest,
    getEpisodeSuccess,
    getEpisodeError
  } from './index'
  import axios from 'axios'
  
  export const getEpisodes = () => async (dispatch, getState) => {
    dispatch(getEpisodeRequest())
    
    const {
      next: url
    } = getState().episodes.infoApi
  
    try {
      const response = await axios.get(url)
  
      const {
        results,
        info
      } = response.data
  
      dispatch(getEpisodeSuccess({
        info,
        episodes: results
      }))
    } catch (error) {
      dispatch(getEpisodeError(error))
    }
  }
  