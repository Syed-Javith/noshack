import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import image1 from '../../assets/images/about-us/3.png';
import image2 from '../../assets/images/about-us/Writers (1).png';
import image3 from '../../assets/images/about-us/Kanishka pp transparent.png';
import image4 from '../../assets/images/about-us/4.png';
import './AboutCreators.css'

const CoFounder1 = ({ image, name, role }) => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!isHovered);
  };

  return (
    <Col sm={6}>
      <div className='img-body' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img className='co-founder' src={image} alt="" />
        <div className={`img-hide ${isHovered ? 'show' : ''}`}>
          <a href="https://www.linkedin.com/in/keerthisivam/"><img className='img-edit' width="50" height="50" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin" /></a>
          <a href="https://twitter.com/keerthisivam"><img width="50" height="50" src="https://img.icons8.com/ios/50/x.png" alt="x"/></a>
        </div>
        <div className='img-content' >
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </Col>
  );
};
const CoFounder2 = ({ image, name, role }) => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!isHovered);
  };

  return (
    <Col sm={6}>
      <div className='img-body' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img className='co-founder' src={image} alt="" />
        <div className={`img-hide ${isHovered ? 'show' : ''}`}>
          <a href="https://www.linkedin.com/in/hariharan-g-07/"></a><img width="50" height="50" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin" />
          <a href="https://twitter.com/abstractfrom13"><img width="50" height="50" src="https://img.icons8.com/ios/50/x.png" alt="x"/></a>

        </div>
        <div className='img-content' >
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </Col>
  );
};
const CoFounder3 = ({ image, name, role }) => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!isHovered);
  };

  return (
    <Col sm={6}>
      <div className='img-body' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img className='co-founder' src={image} alt="" />
        <div className={`img-hide ${isHovered ? 'show' : ''}`}>
          <a href="https://www.linkedin.com/in/kanishka-sagadevan/"><img className='img-edit' width="50" height="50" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin" /></a>
        </div>
        <div className='img-content' >
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </Col>
  );
};
const CoFounder4 = ({ image, name, role }) => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!isHovered);
  };

  return (
    <Col sm={6}>
      <div className='img-body' onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img className='co-founder' src={image} alt="" />
        <div className={`img-hide ${isHovered ? 'show' : ''}`}>
          <a href="https://www.linkedin.com/in/venkatesan-c-a7b9241a9/"><img className='img-edit' width="50" height="50" src="https://img.icons8.com/ios/50/linkedin.png" alt="linkedin" /></a>
        </div>
        <div className='img-content' >
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </Col>
  );
};

function AboutCreators() {
  
  return (
    <>
    <section id='team'>
      <h1 className='team-intro'>Our team</h1>
      <Row>
        <CoFounder1 image={image2} name="Keerthi Sivam" role="Co-founder and CEO" />
        <CoFounder2 image={image1} name="Hariharan" role="Co-founder and director" />
      </Row>
      <Row>
        <CoFounder3 image={image3} name="Kanishka" role="Co-founder and director" />
        <CoFounder4 image={image4} name="Venkatesh" role="Co-founder and CTO" />
      </Row>
      </section>
    </>
  );
}

export default AboutCreators;