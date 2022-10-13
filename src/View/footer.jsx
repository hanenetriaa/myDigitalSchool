import React from "react";
import './footer.css';


function Footer() {
  return (
    <>
        <div>
        <footer>
          <ul className="icons">
<<<<<<< HEAD
            <li><a href="https://www.facebook.com/my.digital.schoolFR/" target="blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/mydigitalschool/" target="blank"> Instagram</a></li>
            <li><a href="https://www.linkedin.com/school/mydigitalschool/" target="blank">Linkedin</a></li>
            <li><a href="https://twitter.com/home" target="blank">Twitter</a></li>
=======
            <li><a href="https://www.facebook.com/my.digital.schoolFR/" target="blank"><img src="asset/img/facebook%20(1).png" width={20} /></a></li>
            <li><a href="https://www.instagram.com/mydigitalschool/" target="blank"><img src="asset/img/instagram%20(1).png" width={20} /></a></li>
            <li><a href="https://www.linkedin.com/school/mydigitalschool/" target="blank"><img src={'./img/linkedin.png'} width={20} /></a></li>
            <li><a href="https://twitter.com/home" target="blank"><div className="twitter"></div></a></li>
>>>>>>> 96d5f85ab7fdcc99cfb397e5a05a12be2bc77e0d
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