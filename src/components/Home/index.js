import { useEffect, useState } from 'react'

import AnimatedLetters from '../AnimatedLetters'
import LogoSubtitle from '../../assets/Images/ShortCVVersion2.png'
import Logo from '../../assets/Images/PP.png'
import Gif from '../../assets/Images/Logo1.gif'
import pdf from '../../assets/CV/CV.pdf'
import './index.scss'

const Home = () => {

    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = pdf;
      link.download = 'CV.pdf';
      link.click();
    };
    const [letterClass, setLetterClass] = useState('text-animate')
    const [isClicked, setIsClicked] = useState(false);  
    const openingstatement = ['H', 'i', ' ','I','\'','m',' ']
    const nameArray = ['H', 'a', 'r', 's', 'a', 'm', 'e', 'r', 'v', 'e', 'e', 'r']
    const jobArray = [   
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

    // const jobArray = [
    //   'P',
    //   'R',
    //   'O',
    //   'F',
    //   'I',
    //   'C',
    //   'I',
    //   'E',
    //   'N',
    //   'T',
    //   '',
    //   'I',
    //   'T',
    //   '',
    //   'P',
    //   'R',
    //   'O',
    //   'F',
    //   'E',
    //   'S',
    //   'S',
    //   'I',
    //   'O',
    //   'N',
    //   'A',
    //   'L',
    // ]
  
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
              <a className="stylerefernce" href={pdf} download="CV" target="_blank" rel="noreferrer" onClick={handleDownload}>
              &lt;Sorry, PDF code is broken; fixing in progress&gt;
              <br></br>  
              <button className="cv-download-harsamerveersingh">Download CV </button>
              </a>
             
            </div>
            <div className="page-pp">
              <img className="sub-pp-int" src={Logo} alt="Harsamerveer"/>
              <div className="middle">
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

              Welcome to my online space! I'm thrilled to have you here. Take a moment to explore my creative journey on the left, where you'll find a showcase of my projects. Let's connect! </p>
            
          
            </h1>
            <div className="page">
            <button
              className="cv-view-harsamerveersingh"
              onClick={() => setIsClicked(!isClicked)} // Toggle CV visibility on click
            >
                View CV
              </button>

              {(isClicked) && (
                <img className="sub-cv-int" src={LogoSubtitle} alt="Short CV" />
              )}
            <h1>Founder of RiskEval</h1>
            <p>As the founder of <a href="https://riskevall.netlify.app" target="_blank" rel="noopener noreferrer">RiskEval</a>, a cybersecurity firm, we provide services such as:</p>
            <div className="RiskEvallServices">
              <ul>
              <li><strong>Data Analysis:</strong><p>Turning complex data into actionable insights.</p></li>
              <li><strong>Risk Mitigation:</strong><p>Developing strategies to minimize potential risks.</p></li>
              <li><strong>Business Optimization:</strong><p>Streamlining workflows to enhance performance and outcomes.</p></li>
              </ul>
            </div>
            
            </div>
          </div>
        </div>
       
        </div>
      </>
    )
  }
  
  export default Home  

