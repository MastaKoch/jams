import React from "react";
import { Button, Menu } from "semantic-ui-react";
import "./style.css";
import {
  BrowserRouter,
  Route,
  Link,
  useRouteMatch,
  Switch,
  Router,
} from "react-router-dom";
import UserContext from "../../utils/contexts/UserContext";
import { useContext } from "react";
import Axios from "axios";

export default function Nav() {
  const { path } = useRouteMatch();
  const user = useContext(UserContext);
  // const signOff = ()=> {
  //     localStorage.clear();
  //     window.location.href = '/';
  // }

  const logout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "/api/logout",
    }).then((res) => {
      console.log(res);
      window.location.href = "/";
    });
  };

  const signup = () => {
    Axios({
      method: "POST",
      data: {
        username: signupName,
        password: signupPassword,
      },
      withCredentials: true,
      url: "/api/signup",
    }).then((res) => {
      console.log(res);
      window.location.href = "/";
    });
  };

  console.log(user);
  return (
    <Menu className="navMenu">
      {!user && (
        <div>
          <Menu.Item>
            <Link to="/signup">
              <Button primary>Sign up</Button>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to="/login">
              <Button>Log-in</Button>
            </Link>
          </Menu.Item>
        </div>
      )}

      <div className="jamDiv">
        <h1 className="navLogo">JAMS</h1>
        <div>
          {user && (
            <div className="conditionalRender">
              <div className="helloUser">
                <h1 className="welcome">Welcome, {user.username}! </h1>
              </div>

              <div className="logoutBtn">
                <Button className="logoutNowBtn" onClick={logout}>Log Out</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Menu>
  );
}

