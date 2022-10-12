import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {logout} from '../api/userService';
import Swal from "sweetalert2";
import {useState} from 'react';
import { useParams } from "react-router-dom";

function Header() {
  const [Data, SetData] = useState({});
  const { id } = useParams();
  const Navigate = useNavigate();
  const onSubmitHandler= () => {
    id.preventDefault();
    Swal.fire({
        title: "Tu es sûre ?",
        showDenyButton: true,
        confirmButtonText: "quitter",
        denyButtonText: "rester",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            logout(id)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              Swal.fire({
                title: "Error",
                icon: "error",
              });
              console.log(err);
            });
          Swal.fire("Register!", "", "success");
          <Navigate to="/" replace={true} />
        } 
      })};

  return (
    <div className="header" onSubmit={onSubmitHandler}>
      <div className="logo">
      <img 
      src="https://tocwebproject.fr/_nuxt/img/mydigitalschool-logo-white.f8fb2e3.png"
      alt="new"
      className="logo"
      />
      </div>
    
    <nav className="nav">
      <NavLink exact activeClassName="active" to="/home" className="nav-link">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/profile" className="nav-link">
        Mon profile
      </NavLink>
      <NavLink type ="submit" activeClassName="active" to="" className="nav-link">
        Log out
      </NavLink>
    </nav>
    </div>
  );

}
export default Header;