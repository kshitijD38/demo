import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h1>Edgistify</h1>
            <Link to='/sign-up'>
                Edgistify is one of India’s most credible dark store/ warehouse operations & fulfillment networks that offer a tech-enabled one-stop platform for multiple logistics requirements. We provide operations & fulfillment services with hyper-local delivery PAN India.
            </Link>
          </div>
          <div class='footer-link-items'>
            <h2>Company</h2>
            <Link to='/'>Mentors</Link>
            <Link to='/'>Team</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Contact Us</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Newsroom</h2>
            <Link to='/'>Awards</Link>
            <Link to='/'>Media & Mentions</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Linkedin</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <div id='hr-line'></div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>© 2021 OptiSupply Chain Solution Pvt Ltd | All Rights Reserved</small>
          <div class='social-icons'>
            <div>
              Privacy Policy
            </div>
            <div>
              Terms & Conditions
            </div>
            <div>
              Sitemap
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;