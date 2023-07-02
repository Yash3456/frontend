import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Search from '../Header/Search';
function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-heading">
        <h3 className='orangeText' >Express Yourself with VIP Mobile Number from Life Time Number</h3>
        <p>VIP Phone No from Life Time Number is a mobile phone number that has been specially selected or customized to be unique and memorable. VIP Cell Number from Life Time Number is often sought after by individuals who want to stand out from the crowd or who wish to express their personal style or status through their phone number.
          <br />
          Choice Mobile No from Life Time Number is a popular option for those seeking a VIP Mobile Number. These are phone numbers from Life Time Number that can be selected by the customer from VIP mobile number list, often with special patterns or sequences that make them more memorable or valuable. Some examples of VVIP Number might include repeated digits (such as 777 or 999), sequential numbers (such as 12345 or 67890), or lucky numbers (such as 888 or 168).
          <br />
          Another option for Fancy Mobile Number is the VIP mobile number list from Life Time Number. This is a curated collection of exclusive VIP No that has been pre-selected for their unique and desirable qualities. VIP Mobile Numbers from Life Time Number may include numbers with specific letter combinations or words, as well as numbers with patterns or sequences that are particularly rare or valuable.
          <br />
          For those seeking the ultimate in exclusivity, VIP Mobile Number is also available from Life Time Number. These are ultra-premium phone numbers that are extremely rare and highly sought after. Choice number may be reserved for VIPs and celebrities or sold through private auctions to the highest bidder.
          <br />
          Fancy Mobile Number from Life Time Number is another provider of VIP Cell Numbers. These numbers from Life Time Numberare carefully selected and curated for their desirability and exclusivity, and are available for purchase online. Fancy Mobile Numbers from Life Time Numbermay include numbers with special sequences, repeated digits, or personalized combinations that reflect a person's name or business.</p>
      </div>
      
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Number Wallah to receive our best VIP Numbers
        </p>
        <p className='footer-subscription-text'>
          You can get many options as per your choices.
        </p>
        <div className='input-areas'>

          {/* <input type="number" placeholder="Search Your Number" />
          <button className="button">Search </button> */}

          <Search />

        </div>
      </section>
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
            Number Wallah
          </span>
        </p>
      </div>
    </div>

  );
}

export default Footer;
