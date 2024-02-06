import { react, useState, useEffect } from 'react'
import { ReactDOM } from 'react';
import './index.scss'

const Skills = () => {

    const[mousePosition, setMousePosition] = useState ({
        x : 0, y : 0
    });

    useEffect(() => {

        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX, y: e.clientY
            })
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    return (
    <>
     <div>
        <div className="skills" style={{ right: `${mousePosition.x}px`, bottom: `${mousePosition.y}px` }}>
            <div  className="skill">
                <ul>
                    DSA
                </ul>
            </div>
        </div>
        <div className="skills" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}>
          <div  className="skill">
            <ul>
                    Java
            </ul>
          </div>
      </div>
      <div className="skills" style={{ left: `${mousePosition.x}px`, bottom: `${mousePosition.y}px` }}>
          <div  className="skill">
            <ul>
                    HTML
            </ul>
          </div>
      </div>
      <div className="skills" style={{ right: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}>
          <div  className="skill">
            <ul>
                    CSS
            </ul>
          </div>
      </div>
      <div className="skills" style={{ right: `${mousePosition.x+430}px`, top: `${mousePosition.y-230}px` }}>
          <div  className="skill">
            <ul>
                    Angular
            </ul>
          </div>
      </div>
      <div className="skills" style={{ left: `${mousePosition.x-200}px`, top: `${mousePosition.y+300}px` }}>
          <div  className="skill">
            <ul>
                    React
            </ul>
          </div>
      </div>

      <div className="skills" style={{ left: `${mousePosition.x+177}px`, bottom: `${mousePosition.y-423}px` }}>
          <div  className="skill">
            <ul>
                    JavaScript
            </ul>
          </div>
      </div>

    </div>
    
    </>
    )
}

export default Skills 