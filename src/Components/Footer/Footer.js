import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        
        <div class='footer-link-items'>
          <h2 className='orangeText'>About Us</h2>
          <Link to='/'>How it works</Link>
          <Link to='/'>Testimonials</Link>
          <Link to='/'>Careers</Link>
          <Link to='/'>Investors</Link>
          <Link to='/'>Terms of Service</Link>
        </div>
        <div class='footer-link-items'>
          <h2 className='orangeText'>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Destinations</Link>
          <Link to='/'>Sponsorships</Link>
        </div>
        
        <div class='footer-link-items'>
          <h2 className='orangeText'>Videos</h2>
          <Link to='/'>Submit Video</Link>
          <Link to='/'>Ambassadors</Link>
          <Link to='/'>Agency</Link>
          <Link to='/'>Influencer</Link>
        </div>
        <div class='footer-link-items'>
          <h2 className='orangeText'>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Youtube</Link>
          <Link to='/'>Twitter</Link>
        </div>
        
      </div>
      <hr className='hz-line' />
      <div className="last-footer">
        <p>
          All right reserved by
          <span className='orangeText'>
            Yash Goyal
          </span>
        </p>
      </div>
    </div>

  );
}

export default Footer;
