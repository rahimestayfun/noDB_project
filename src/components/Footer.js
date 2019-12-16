import React from 'react'
import "../styles/Footer.css"

export default function Footer() {
    return (
        <div className="footer" >
            <h2>Follow me</h2>
            <a href="https://www.instagram.com/" target="_blank"> <img width="30px" alt="instagram" src="https://img.icons8.com/color/48/000000/instagram-new.png"></img></a>
            <a href="https://twitter.com/" target="_blank"><img width="30px" alt="twitter" src="https://img.icons8.com/color/48/000000/twitter.png"></img></a>
            <a href="https://www.facebook.com/" target="_blank"><img width="30px" alt="facebook" src="https://img.icons8.com/color/48/000000/facebook-new.png"></img></a>
        </div>
    )
}