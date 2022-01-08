import React from 'react'

export const Footer = () => {
    return (
        <div>
            <Footerdiv>

        <div className="company">
          <h4>Company</h4>
          <span>About</span>
          <span>Mission</span>
          <span>Services</span>
          <span>Social</span>
          <span>Get in touch</span>
        </div>
        <div className="products">
          <h4>Products</h4>
          <span>About</span>
          <span>Mission</span>
          <span>Services</span>
          <span>Social</span>
          <span>Get in touch</span>
        </div>
        <div className="accounts">
          <h4>ACCOUNTS</h4>
          <span>About</span>
          <span>Mission</span>
          <span>Services</span>
          <span>Social</span>
          <span>Get in touch</span>
        </div>

        <div className="resources">
          <h4>RESOURCES</h4>
          <span>Webmail</span>
          <span>Redeem code</span>
          <span>WHOIS lookup</span>
          <span>Site map</span>
          <span>Web templates</span>
          <span>Email templates</span>
        </div>

        <div className="support">
          <h4>SUPPORT</h4>
          <span>Contact Us</span>
          <span>Web chat</span>
          <span>Open ticket</span>
        </div>

        <div className="social">
        <h4>SOCIAL</h4>
          <img src={facebook} alt="fb" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
      
    </Footerdiv>
        </div>
    )
}
