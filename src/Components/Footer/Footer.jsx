import React from 'react'
import './Footer.css'

const Footer = () => {
  const copyEmail = () => {
    const email ='b7divya@gmail.com';
    navigator.clipboard.writeText(email)
    .then (() => {
      alert('Email Copied To Clipboard!');
    })
    .catch(err => {
      console.error ('Failed To Copy: ', err);
    });
  }
  return (
    <div className='footer'>
        <div className='footer-container'>
          <div className='footer-container-mail'>
            <div className='contact-container-desc'>
                  Get in touch (Click to copy)
              </div>
              <div className='contact-container-mail' onClick={copyEmail}>
                  b7divya@gmail.com
              </div>
          </div>
          <div className='footer-container-social'>
            <a href="https://www.linkedin.com/in/divya-bhatt/" className='footer-container-social-linkedin' target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/b7divya" className='footer-container-social-git' target="_blank" rel="noopener noreferrer">Git</a>
          </div>
          <div className='footer-container-copyright'>
            © Divya Bhatt 2024
          </div>
        </div>
    </div>
  )
}

export default Footer
