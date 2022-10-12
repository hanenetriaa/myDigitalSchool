import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import BreadcrumbPages from "../componant/breadcrumbPages";
import userService from "../api/userService";

const Profile = () => {
  const [Data, SetData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const OnchangeHandler = (e) => {
    SetData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data);
  };
  const OnSubmitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("prenom", Data.prenom);
    formdata.append("nom", Data.nom);
    formdata.append("email", Data.email);
    formdata.append("password", Data.password);
    formdata.append("tel", Data.tel);
    Swal.fire({
      title: "Do you want to save a new product?",
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        userService
          .updateCustomer(id, formdata)
          .then((res) => {
            console.log(res);
            /* navigate("/"); */
          })
          .catch((err) => {
            console.log(err);
          });
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  useEffect(() => {
    userService.getCustomer(id).then((res) => {
      console.log("data of customer", res);
      SetData(res.data.data);
    });
  }, []);
  return (
    <>
      <BreadcrumbPages section="Register" page="Profile"></BreadcrumbPages>
      <section
        className="contact spad"
        style={{
          paddingTop: "15px",
        }}
      >
        <div
          className="col-lg-4"
          style={{
            marginLeft: "35%",
            border: "3px solid FireBrick",
          }}
        >
          <div className="checkout__order">
            <div className="row">
              <h5
                style={{
                  color: "FireBrick",
                }}
              >
                Your Profil
              </h5>{" "}
              <Link to="/" style={{ color: "FireBrick", marginLeft: "75%" }}>
                {" "}
                X
              </Link>{" "}
            </div>
            <div className="checkout__order__product">
            </div>
            <div className="contact__form">
              <h5>Please verify your informations</h5>
              <form action="#" onSubmit={OnSubmitHandler}>
                <input
                  type="text"
                  placeholder="Fullname"
                  onChange={OnchangeHandler}
                  name="fullname"
                  value={Data.fullname}
                />
                <input
                  type="text"
                  placeholder="Email"
                  onChange={OnchangeHandler}
                  name="email"
                  value={Data.email}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  onChange={OnchangeHandler}
                  name="phone"
                  value={Data.phone}
                />
                <input
                  type="text"
                  placeholder="Address"
                  onChange={OnchangeHandler}
                  name="address"
                  value={Data.address}
                />
                <input
                  type="text"
                  placeholder="CIN"
                  onChange={OnchangeHandler}
                  name="cin"
                  value={Data.cin}
                />
                <button type="submit" className="site-btn">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
