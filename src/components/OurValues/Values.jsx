import React from 'react'

const Values = ({head , desc , index}) => {
  return (
    <li data-aos="fade-up"
    data-aos-duration="3000">
     <h2>{index+1}. {head}</h2>
      <p className="grey">{desc}</p>
    </li>
  )
}

export default Values
