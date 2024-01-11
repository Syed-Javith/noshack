import React from 'react'
import "./Footer.css"
import logo from '../../assets/images/footer/NoShack_Gray_Icon.svg'
import SocialMedia from './SocialMedia'
import Address from './Address'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                       <Address />
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex flex-row justify-content-center logo">
                            <img src={logo} alt="" height={50} width={50} />
                        </div>
                        <SocialMedia />
                        <div className="d-flex flex-row justify-content-center mt-3">
                        
                        <p className='grey'>© 2023 NoShack Solutions | All rights reserved</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='important-links'>
                            <div>
                                <a className="hover" href="https://www.nnbedu.com/">NodeNBlocks for Education</a>
                            </div>
                            <div>
                                <Link className="hover" to="/terms-privacy-cookie-policy">Terms of service</Link>
                            </div>
                            <div>
                                <Link className="hover" to="/terms-privacy-cookie-policy">Privacy Policy</Link></div>
                            <div>
                                <Link className="hover" to="/terms-privacy-cookie-policy">Cookie Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
