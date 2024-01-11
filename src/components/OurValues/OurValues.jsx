import React from 'react'
import { ourValues } from '../../data'
import Values from './Values';
import "./OurValues.css"

const OurValues = () => {
  return (
    <div className="our-values">
        <p className="text-center grey">Our Values</p>
      <div className="text-center">
        <img data-aos="zoom-in" className="rounded-3" src={require("../../assets/images/about-us/Our values_edited.jpg")} alt="" width={'50%'}/>
      </div>
      <ol>
      {
        ourValues.map((e,index)=> {
            const head = e.split("#")[0];
            const desc = e.split("#")[1];
            return <Values head={head} desc={desc} key={index} index={index} />
        })
      }
      </ol>
    </div>
  )
}

export default OurValues
