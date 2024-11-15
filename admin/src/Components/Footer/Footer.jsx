import React from 'react'
import './Footer.css'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <hr />
      <p>Copyright &copy; {currentYear} - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
