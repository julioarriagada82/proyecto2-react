import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getCharacters as getCharactersCreator } from '../../redux/characters/thunks'

const CharactersContainer = props => {
  const {
    characters,
    loading,
    pages,
    currentPage,
    count,
    getCharacters
  } = props

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div>
      {loading && 'Loading.....'}
      {!loading && <div>Hay {count} elementos.</div>}
      <div className="row">
        {characters.map((character, index) => (
          <div key={index} className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img-top" src={character.image} alt={character.name} />
            <div className="card-body">
              <h4 className="card-title">{character.name}</h4>
              <span className="badge badge-primary">{character.status}</span>
                <span className="badge badge-secondary">{character.species}</span>
                <span className="badge badge-success">{character.gender}</span>
            </div>
            <div className="card-body">
              <button className="btn btn-primary">Favorito</button>
            </div>
          </div>
        </div>
        ))}
      </div>
      {!loading && <div>Hay {pages} páginas, estás en la página {currentPage} </div>}
      {(!loading && currentPage < pages) && <button onClick={getCharacters}>Ver más</button>}
    </div>
  );
}

const mapStateToProps = state => {
  const {
    characters,
    loading,
    error,
    infoApi
  } = state.characters

  const {
    count,
    currentPage,
    pages
  } = infoApi

  return {
    characters,
    loading,
    error,
    count,
    currentPage,
    pages
  }
}

const mapDispatchToProps = {
  getCharacters: getCharactersCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersContainer)
