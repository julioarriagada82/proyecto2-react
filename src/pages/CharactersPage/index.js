import React from 'react'
import CharactersContainer from '../../containers/CharactersContainer'
import NavBar from '../../components/NavBar'

const CharactersPage = () => {
  return (
    <div className="container">
      <NavBar />
      <CharactersContainer />
    </div>
  )
}

export default CharactersPage
