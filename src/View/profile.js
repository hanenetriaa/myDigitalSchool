import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {getProfileById} from "../api/userService";

const Profile = () => {;
 
  const [nom, SetNom] = useState();
  const [prenom, SetPrenom] = useState();
  const [email, SetEmail] = useState();
  const [tel, SetTel] = useState();
  const [Id, SetId] = useState();
  const [Data, SetData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const getProfile = () => {
    getProfileById(id)
      .then((res) => {
        console.log(res);
        SetNom(res.data.nom);
        SetPrenom(res.data.prenom);
        SetEmail(res.data.email);
        SetTel(res.data.tel);
        SetId(res.data._id);
        // SetId(res.data.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("email"));
    if (user) {
      SetId(user.user._id);
      console.log("id", user.user._id);
    }
    getProfile(id);
  }, []);

  return (
    <>
      <section className="section-body">
        <h1> Mon profile </h1>
        <section>
          Mon nom : {nom}
        </section>
        <section>
          Mon prénom : {prenom}
        </section>
        <section>
          Mon mail : {email}
        </section>
        <section>
          Mon numéro de téléphone : {tel}
        </section>
      </section>
    </>
  );
};
export default Profile;
