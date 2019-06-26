import React from 'react'
import EpisodesContainer from '../../containers/EpisodesContainer'
import NavBar from '../../components/NavBar'

const EpisodesPage = props => {
  return (
    <div className="container">
      <NavBar />
      <EpisodesContainer />
    </div>
  )
}

export default EpisodesPage