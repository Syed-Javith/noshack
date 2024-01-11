import React from 'react'
import { ourValues } from '../../data'
import Values from './Values';
import "./OurValues.css"

const OurValues = () => {
  return (
    <div className="our-values">
      <div className="text-center">
        <img className="rounded-3" src={require("../../assets/images/about-us/Our values_edited.jpg")} alt="" width={'50%'}/>
      </div>
      <ol>
      {
        ourValues.map((e)=> {
            const head = e.split("#")[0];
            const desc = e.split("#")[1];
            return <Values head={head} desc={desc} />
        })
      }
      </ol>
    </div>
  )
}

export default OurValues
