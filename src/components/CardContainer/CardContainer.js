import React from 'react'
import Error from '../Error/Error'
import SingleCard from '../SingleCard/SingleCard'
import './CardContainer.css'

const CardContainer = ({ allMonsters }) => {
  
  const digimon = allMonsters.map(digimon => {
    return (
    <SingleCard name={digimon.name} img={digimon.img} level={digimon.level} key={digimon.name}/>
    )
  })

  return (
    <div className="parent">
      {allMonsters.length ? 
      <section className="cardContainer">
        {digimon}
      </section> :
      <Error error="Sorry, no digimon to display here!"/>}
    </div>
  )  
};

export default CardContainer;

