import React from "react";
import UserContext from "../utils/contexts/UserContext";
import { useContext } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  useRouteMatch,
  Switch,
  Router,
} from "react-router-dom";



export default function Science() {
    const { path } = useRouteMatch();
    const user = useContext(UserContext);
  
    console.log(user);
    return (
      <div>
          Hello World
      </div>
    );
  }