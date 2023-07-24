import { useState } from "react";
import axios from "axios";
import lgimg from '../../images/53.jpg';

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:9092/AdminPage", {
        email: email,
        password: password,
      }).then(
        (res) => {
          console.log(res.data);

          if (res.data.message === "Email not exists") {
            alert("Email does not exist.");
          } else if (res.data.message === "Login Success") {
            window.location.href = "/AdminDashboard";
          } else {
            alert("Incorrect email and password combination.");
          }
        },
        (fail) => {
          console.error(fail); // Error!
        }
      );
    } catch (err) {
      alert(err);
    }
  }

  function goBack() {
    window.history.back();
  }

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${lgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="card bg-transparent"> {/* Updated className */}
        <div className="card-body" style={{ backgroundColor: "#09065980" }}>
          <h1 className="card-title text-center" style={{ color: "#ffffff" }}>Admin Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email" style={{ color: "#ffffff" }}><b>Email</b></label> {/* Updated inline styling */}
              <input
                type="text"
                id="email"
                placeholder="Email"
                size="30"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" style={{ color: "#ffffff" }}><b>Password</b></label> {/* Updated inline styling */}
              <input
                type="password"
                id="password"
                required
                placeholder="Password"
                size="30"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
              />
            </div>

            <br />

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                borderRadius={0}
                variant='solid'
                colorScheme='blue'
                width="full"
                onClick={login}
              >
                Login
              </button>


              <button
                type="button"
                className="btn btn-secondary"
                onClick={goBack}
                style={{ marginLeft: "10px" }}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;