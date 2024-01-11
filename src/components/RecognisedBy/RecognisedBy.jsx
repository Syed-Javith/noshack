import React from 'react'
import "./Recognised.css"
const RecognisedBy = () => {
  return (
    <div className="mt-5">
      <h2 className='text-center'>Recognised By</h2>
      <div className='row recognised'>
        <div className="col-lg-6 text-center" data-aos="fade-up">
            <img src={require('../../assets/images/about-us/Startup India Logo.png')} alt="" width={'50%'} />
        </div>
        <div className="col-lg-6 text-center" data-aos="fade-down">
            <img src={require('../../assets/images/about-us/Startup TN Logo.png')} alt="" width={'50%'}/>
        </div>
      </div>
    </div>
  )
}

export default RecognisedBy
