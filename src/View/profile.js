import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getProfileById} from "../api/userService";

const Profile = () => {;
  
  const [Data, SetData] = useState({});
  const { id } = useParams();
  console.log(id);
  const getProfile = () => {
    getProfileById(id)
      .then((res) => {
        console.log(res);
        SetData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);


  return (
    <>
      <section className="section-body">
        <h1> Mon profile </h1>
        <section>
          Mon nom : 
          <p>{Data.nom}</p>
        </section>
        <section>
          Mon prénom:
        <p>{Data.prenom}</p>
        </section>
        <section> 
          Mon mail : 
          <p>{Data.email}</p>
        </section>
        <section>
          Mon numéro de téléphone :
          <p>{Data.mail}</p>
        </section>
      </section>
    </>
  );
};
export default Profile;
