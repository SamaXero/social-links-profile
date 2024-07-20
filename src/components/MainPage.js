import React from 'react'
import Renato from '../assets/images/renato-image.jpg'
import './MainPage.css'

function MainPage() {
  return (
    <div className='main-page-container'>
        <div className='social-links-profile'>
            <div className='container-image'>
                <img alt='user-image' src={Renato} className='user-image'/>
            </div>
            <div className='profile-name-location'>
                <h1 className='profile-name'>Renato Egusquiza</h1>
                <h2 className='profile-location'>Lima, Perú</h2>
            </div>
            <div className='profile-description'>
                <p>"Front-end developer and avid reader"</p>
            </div>
            <div className='social-links'>
                <a href='/' className='github-link'>GitHub</a>
                <a href='/' className='frontendmentor-link'>Frontend Mentor</a>
                <a href='/' className='linkedin-link'>Linkedin</a>
                <a href='/' className='twitter-link'>Twitter</a>
                <a href='/' className='instagram-link'>Instagram</a>
            </div>
        </div>
    </div>
  )
}

export default MainPage