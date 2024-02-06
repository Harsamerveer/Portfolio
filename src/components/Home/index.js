import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoSubtitle from '../../assets/Images/ShortCV.jpg'
import Logo from '../../assets/Images/PP.png'
import Gif from '../../assets/Images/Logo1.gif'
import pdf from '../../assets/CV/CV.pdf'
import Skills from '../Skills'
import './index.scss'

const Home = () => {

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = pdf;
      link.download = 'CV.pdf';
      link.click();
    };

    const[ isHovering, setIsHovering] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate')
    const openingstatement = ['H', 'i', ' ','I','\'','m',' ']
    const nameArray = ['H', 'a', 'r', 's', 'a', 'm', 'e', 'r', 'v', 'e', 'e', 'r']
    const jobArray = [
      'F',
      'U',
      'L',
      'L',
      'S',
      'T',
      'A',
      'C',
      'K',
      ' ',
      'D',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
      '.'
    ]
  
    useEffect(() => {
      let timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
      return () => clearTimeout(timer)
    }, [])
  
    return (
      <>
       <div className="container">
            <div className="cv-harsamerveersingh">
              <a href={pdf} download="CV" target="_blank" rel="noreferrer" onClick={handleDownload}>
              <button className="cv-download-harsamerveersingh">Download CV</button>
              </a>
            </div>
            <div className="page-pp">
              <img className="sub-pp-int" src={Logo} alt="Harsamerveer"/>
              <div class="middle">
                <img className="sub-HSR-int" src={Gif} alt="Harsamerveer"/>
              </div>
            </div>
        <div className="home-page">
       
          <div className="text-zone">
            
            <h1><p>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={openingstatement}
                idx={15}
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={16}
              />
              <br /><br />

              "Welcome to my online space! I'm thrilled to have you here. Take a moment to explore my creative journey on the left, where you'll find a showcase of my projects. Let's connect! "</p>
            

            </h1>
            <div className="page">
              <button className="cv-view-harsamerveersingh" onMouseEnter={() => setIsHovering(true)} 
                      onMouseLeave={() => setIsHovering(false)}> View CV</button> 

              {
              isHovering && (
                  <div >
                    <img className="sub-cv-int" src={LogoSubtitle} alt="Short CV" />
                  </div>
              )
              }
            </div>
          </div>
        </div>
       
        </div>
      </>
    )
  }
  
  export default Home  