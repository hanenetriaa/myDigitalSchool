import React from "react";
import './style.css';

function MDS() {
    return (
        <div className="section-body">
        <section className="home-title " >
      <h1>Bienvenue chez MydigitalSchool</h1>
      <p>
MyDigitalSchool est une école web ouverte à toutes et à tous, aux initiés comme aux débutants. Notre objectif est d’ouvrir le monde du digital à tous les talents et tous les profils.</p>
      </section>

      <section> 
        <h1> Nos différentes formations</h1>
        <section className="formations">
          <section>
            <h1> Nos Bac+3 </h1>
            <ul>
              <li>Bachelor création numérique</li>
              <li>Bachelor développement web</li>
              <li>Bachelor digital</li>
              <li>Bachelor e-commerce</li>
              <li>Bachelor webmarketing</li>
            </ul>
          </section>
          <section>
            <h1> Nos Bac+5 </h1>
            <ul>
              <li>MBA big data</li>
              <li>MBA développeur full-stack</li>
              <li>MBA direction artistique digitale</li>
              <li>MBA direction marketing digitale</li>
              <li>MBA expert UI/UX deisgn</li>
            </ul>
          </section>

        </section>

      </section>
        </div>
    );
  }
  export default MDS;