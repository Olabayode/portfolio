import React from 'react'
import Typical from 'react-typical'
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>   
                    <a href='https://www.linkedin.com/in/emmanuel-olabayode-b600272a8/'>
                        <i class="fa fa-linkedin-square"></i>
                    </a>
                    <a href='https://github.com/Olabayode'>
                        <i class="fa fa-github-square"></i>
                    </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        HI THERE, I'M 
                        <br/>
                        <span className='highlighted-text'>EMMANUEL OLURE</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                'Enthusiastic Software Dev🔵',
                                1000,
                                'Python(Django Web Framework) Dev💻',
                                1000,
                                'React js Developer🌐',
                                1000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Solid interest and growing proficiency in building applicatiions with front and back-end operations. 
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {" "}
                        Hire Me{""}
                    </button>
                    <a href='EmmCv.pdf' download={"Emmanuel Olure CV.pdf"}>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}
