import React from 'react'
import "../styles/Footer.css"

export default function Footer() {
    let currentTimeLine = new Date();
    let currentYear =currentTimeLine.getFullYear()
    return (
        <div className="footer" >
            <p>	&copy;{currentYear} My Recipe Book</p>
            <h2>Follow me</h2>
            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"> <img width="30px" alt="instagram" src="https://img.icons8.com/color/48/000000/instagram-new.png"></img></a>
            <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><img width="30px" alt="twitter" src="https://img.icons8.com/color/48/000000/twitter.png"></img></a>
            <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><img width="30px" alt="facebook" src="https://img.icons8.com/color/48/000000/facebook-new.png"></img></a>
        </div>
    )
}