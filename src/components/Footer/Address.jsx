import React from 'react'

const Address = () => {
  return (
    <div>
       <p className='head'>NoShack Solutions Private Limited</p>

<p className='grey'>No 63, Thandhai Periyar St, MGR Nagar, Chennai - 600078, India</p>
<div className="links">
    <div>
        <img src={require('../../assets/images/footer/mail.png')} alt="" height={20} width={20}/>
        <a className="hover" href="mailto:tech@noshack.com"> tech@noshack.com</a>
    </div>
    <div>
    <img src={require('../../assets/images/footer/phone.png')} alt="" height={20} width={20}/>
        <a className="hover" href="tel:7010422385"> Contact Us</a>
    </div>
</div>
    </div>
  )
}

export default Address
