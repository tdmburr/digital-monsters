import React from 'react'
import Error from '../Error/Error'
import SingleCard from '../SingleCard/SingleCard'
import { Link } from 'react-router-dom'
import './CardContainer.css'

const CardContainer = ({ allMonsters, fetchDigimon }) => {

  const digimon = allMonsters.map(digimon => {
    return (
      <Link to={`/${digimon.name}`} key={digimon.name}>
        <SingleCard name={digimon.name} img={digimon.img} level={digimon.level} key={digimon.name} onClick={() => fetchDigimon(digimon.name)} />
      </Link>
    )
  })

  return (
    <div className="parent">
      {allMonsters.length ?
        <section className="cardContainer">
          {digimon}
        </section> :
        <Error error="Sorry, no digimon to display here!" />}
    </div>
  )
};

export default CardContainer;

