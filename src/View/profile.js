import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {getUser} from "../api/userService";

const Profile = () => {
  const [Data, SetData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getUser(id).then((res) => {
      console.log("data of customer", res);
      SetData(res.data.data);
    });
  }, []);
  return (
    <>
      <section className="section-body">
        <h1> Mon profile </h1>
        <section>
          Mon nom : {Data.nom}
        </section>
        <section>
          Mon prénom : {Data.mail}
        </section>
        <section>
          Mon mail : {Data.mail}
        </section>
        <section>
          Mon numéro de téléphone : {Data.telephone}
        </section>
      </section>
    </>
  );
};
export default Profile;
