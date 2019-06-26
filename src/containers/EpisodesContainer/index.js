import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getEpisodes as getEpisodesCreator } from '../../redux/episodes/thunks'

const EpisodesContainer = props => {
  const {
    episodes,
    loading,
    pages,
    currentPage,
    count,
    getEpisodes
  } = props

  useEffect(() => {
    getEpisodes()
  }, [])

  return (
    <div>
      {loading && 'Loading.....'}
      {!loading && <div>Hay {count} elementos.</div>}

      {!loading &&
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Episodio</th>
            <th scope="col">Fecha al aire</th>
            <th scope="col">Nombre episodio</th>
            <th>Favorito</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode, index) => (
            <tr key={index}>
              <th scope="row">{episode.id}</th>
              <td>{episode.name}</td>
              <td>{episode.air_date}</td>
              <td>{episode.episode}</td>
              <td><button className="btn btn-secundary">Agregar</button></td>
            </tr>
        ))}
        </tbody>
      </table>
      }
      {!loading && <div>Hay {pages} páginas, estás en la página {currentPage} </div>}
        {(!loading && currentPage < pages) && <button onClick={getEpisodes}>Ver más</button>}
    </div>
  );
}

const mapStateToProps = state => {
  const {
    episodes,
    loading,
    error,
    infoApi
  } = state.episodes

  const {
    count,
    currentPage,
    pages
  } = infoApi

  return {
    episodes,
    loading,
    error,
    count,
    currentPage,
    pages
  }
}

const mapDispatchToProps = {
  getEpisodes: getEpisodesCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesContainer)
