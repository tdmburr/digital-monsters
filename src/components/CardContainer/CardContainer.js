import React from 'react'
import Error from '../Error/Error'
import SingleCard from '../SingleCard/SingleCard'

const CardContainer = ({ allMonsters }) => {
  
  // const digimon = allMonsters.map(digimon => {
  //   return <SingleCard name={digimon.name} img={digimon.img} level={digimon.level}/>
  // })

  return (
    <div className="parent">
      <section className="cardContainer">
        {/* {digimon} */}
      </section>
      <Error error="Sorry, no digimon to display here!"/>
    </div>
  )  
};

export default CardContainer;

