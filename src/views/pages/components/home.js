import React from 'react'
import Image from '../../../helpers/assets/img/kenth.jpg'
import { BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'
import { IconContext } from 'react-icons'

const Home = () => {
    return (
        <div className='body-part'>
            <img alt='Person' className='image-kenth' src={Image} />
            <h1> Kenth S. Cadayday </h1>
            <h3> React Front-End Developer</h3>

            <div className='social-media'>
              <a href="https://www.linkedin.com/in/kenth-cadayday-63471a224/" target="_blank" rel="noreferrer">    
                <IconContext.Provider value= {{ className: 'linked-in-react-icon'}}>
                        <BsLinkedin />
                </IconContext.Provider>
              </a>
              
              <a href="https://github.com/Kentuxx" target="_blank" rel="noreferrer">
                <IconContext.Provider value= {{ className: 'github-react-icon'}}>
                        <BsGithub />                
                </IconContext.Provider>
              </a>

              <a href="https://www.facebook.com/kenth.s.cadayday/" target="_blank" rel="noreferrer">
                <IconContext.Provider value= {{ className: 'fb-react-icon'}}>
                        <BsFacebook />
                </IconContext.Provider>
              </a>

            </div>
        </div>
    )
}

export default Home
