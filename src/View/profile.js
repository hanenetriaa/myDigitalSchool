import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getProfileById} from "../api/userService";

const Profile = () => {;
 
  // const [nom, SetNom] = useState();
  // const [prenom, SetPrenom] = useState();
  // const [email, SetEmail] = useState();
  // const [tel, SetTel] = useState();
  // const [Id, SetId] = useState();
  // const { id } = useParams();
  // const getProfile = () => {
  //   getProfileById(id)
  //     .then((res) => {
  //       console.log(res);
  //       SetNom(res.data.nom);
  //       SetPrenom(res.data.prenom);
  //       SetEmail(res.data.email);
  //       SetTel(res.data.tel);
  //       SetId(res.data._id);
  //       // SetId(res.data.data._id);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("email"));
  //   if (user) {
  //     SetId(user.user._id);
  //     console.log("id", user.user._id);
  //   }
  //   getProfile(id);
  // }, []);

  const [Prenom, SetPrenom] = useState();
  const [Nom, SetNom] = useState();
  const [Email, SetEmail] = useState();
  const [Tel, SetTel] = useState();
  const [id, SetId] = useState();

  const getProfile = () => {
    getProfileById()
      .then((res) => {
        console.log(res);
        SetPrenom(res.data.prenom);
        SetNom(res.data.nom);
        SetEmail(res.data.email);
        SetTel(res.data.tel);
        SetId(res.data._id);
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
          <p>{Nom}</p>
        </section>
        <section>
          Mon prénom:
        <p>{Prenom}</p>
        </section>
        <section> 
          Mon mail : 
          <p>{Email}</p>
        </section>
        <section>
          Mon numéro de téléphone :
          <p>{Tel}</p>
        </section>
      </section>
    </>
  );
};
export default Profile;
