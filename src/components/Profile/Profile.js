import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../css/Profile.css";
import EditProfil from "../EditProfil";
import { useSelector } from "react-redux";

function Profile() {
  const profile = useSelector((state) => state.profile);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div class="page shadow">
        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src="https://t3.ftcdn.net/jpg/05/58/90/86/360_F_558908696_FT4eudQGIbH6Pabwtd8gF9VS8F8Jk5R3.jpg"
                    alt="Astronaute"
                    style={{ width: "65%", borderRadius: "100%" }}
                  />
                </div>
                <br />
                <EditProfil profile={profile} />
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2>{profile.name}</h2>
                  <p>{profile.position}</p>
                  <p>{profile.adress}</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4">Bio </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio">{profile.bio}</p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}

export default Profile;
