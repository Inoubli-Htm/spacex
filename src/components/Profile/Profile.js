import { Button } from "react-bootstrap";
import "./Profile.css";

function Profile() {
  return (
    <>
      <aside className="profile-card">
        <header>
          {/* here’s the avatar */}
          <a href="/">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" />
          </a>
          {/* the username */}
          <h1>David Jones</h1>
        </header>
        <div className="profile-bio">
          <p>
            Even when everything is perfect, you can always make it better.
            Break barriers in your head, create something crazy and don't forget
            Code is Poetry...
          </p>
          <Button variant="info">Edit</Button>
        </div>
      </aside>
    </>
  );
}

export default Profile;
