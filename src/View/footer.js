import React from "react";
import { Link } from "react-router-dom";
import './footer.css';


function Footer() {
  return (
    <>
        <div>
        <footer>
          <ul className="icons">

            <li><a href="https://www.facebook.com/my.digital.schoolFR/" target="blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/mydigitalschool/" target="blank"> Instagram</a></li>
            <li><a href="https://www.linkedin.com/school/mydigitalschool/" target="blank">Linkedin</a></li>
            <li><a href="https://twitter.com/home" target="blank">Twitter</a></li>
          </ul>
          <ul className="menu">
          
            <li><Link to={"/home"} >Home </Link></li>
            <li><Link to={"/profile"} >Mon profile </Link></li>
          </ul>
          <div className="footer-copyright">
            <p>Un site réalisé par les meilleurs dev web de la planète</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;