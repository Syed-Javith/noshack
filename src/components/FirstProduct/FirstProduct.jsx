import React from 'react'
import "./FirstProduct.css"
const FirstProduct = () => {
  return (
    <div className='first-product'>
      
<p>Our first product</p>
<h1>NodesNBlocks for Education</h1>
<button className='btn btn-light rounded-5'>Explore</button>
<div className="explore">

<img data-aos="fade-up" src={require('../../assets/images/home/Feature Graphic.png')} className='animate' alt="" height={'8%'} width={'80%'} />

</div>
    </div>
  )
}

export default FirstProduct
