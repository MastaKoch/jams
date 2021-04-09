import UserContext from "../../utils/contexts/UserContext";
import { useContext } from "react";

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