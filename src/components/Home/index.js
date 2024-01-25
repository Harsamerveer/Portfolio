import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoSubtitle from '../../assets/Images/ShortCV.png'
import './index.scss'

const Home = () => {
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
        <div className="container home-page">
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
              <img className="sub-cv-int" src={LogoSubtitle} alt="Harsamerveer"/>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Home  