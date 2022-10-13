import React from "react";
import './footer.css';


function Footer() {
  return (
    <>
        <div>
        <footer>
          <ul className="icons">
            <li><a href="https://www.facebook.com/my.digital.schoolFR/" target="blank"><img src="asset/img/facebook%20(1).png" width={20} /></a></li>
            <li><a href="https://www.instagram.com/mydigitalschool/" target="blank"><img src="asset/img/instagram%20(1).png" width={20} /></a></li>
            <li><a href="https://www.linkedin.com/school/mydigitalschool/" target="blank"><img src="asset/img/linkedin.png" width={20} /></a></li>
            <li><a href="https://twitter.com/home" target="blank"><img src={"/img/twitter(3).png"} width={20} /></a></li>
          </ul>
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Mon profile</a></li>
            <li><a href="#">Log out</a></li>
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