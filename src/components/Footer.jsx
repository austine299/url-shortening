import React from 'react'

function Footer() {
  return (
    <div className="footer-body">
        <h1 className="footer-shortly-header">Shortly</h1>
        <div className="footer-list-container">
            
            <ul className="list-body">
                <span className="">Features</span>
                <li className="">Link Shortening</li>
                <li className="">Branded Links</li>
                <li className="">Analytics</li>
            </ul>
        
        
            <ul className="list-body">
                <span className="">Resources</span>
                <li className="">Blog</li>
                <li className="">Developer</li>
                <li className="">Support</li>
            </ul>
        
        
            <ul className="list-body">
                <span className="">Company</span>
                <li className="">About</li>
                <li className="">Our Team</li>
                <li className="">Careers</li>
                <li className="">Contact</li>
            </ul>
        
        
            <ul className="socia-body">
                <li className="fa fa-facebook"></li>
                <li className="fa fa-twitter"></li>
                <li className="fa fa-pitres"></li>
                <li className="fa fa-instagram"></li>
            </ul>
        
        </div>
    </div>
  )
}

export default Footer