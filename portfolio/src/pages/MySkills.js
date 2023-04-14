import React from 'react'
import '../styles/Skill.css'
import  imge from '../assets/giphy.gif'
import  imge2 from '../assets/logo-geabfaac30_1920.png'
import  imge3 from '../assets/csslogo.png'
import  imge4 from '../assets/JavaScriptLogo.png'
import  imge5 from '../assets/material.svg'
import  imge6 from '../assets/recoil.jpg'
import  imge7 from '../assets/router.png'
import imge8 from '../assets/git.jpg'
import imge9 from  '../assets/github.png'
import Reactlogo from '../helpers/Reactlogo'
const MySkills = () => {

    const skills=[
        {
            skill:"HTML",
            url:imge2
        },
        {
            skill:"CSS",
            url:imge3
        },
        {
            skill:"JavaScript",
            url:imge4
        },
        {
            skill:"React.js",
             url:imge
        },
        {
            skill:"Material UI",
            url:imge5
        },
        {
            skill:"Recoil",
            url:imge6
        },
        {
            skill:"React-Router-DOM",
            url:imge7
        },
        {
            skill:"GitBash",
            url:imge8
        },
        {
            skill:"GitHub",
            url:imge9
        }
    ]
  return (
    <div className='main'>
       {
        skills.map((item)=>{
            return (
                <div className='skill'>
               <div> 
               <li>
                <img src={item.url} className='image'/>
                </li>
                <li>
                {item.skill}
                </li>
                
               </div>
                </div>
            )
        })
       }
    </div>
  )
}

export default MySkills