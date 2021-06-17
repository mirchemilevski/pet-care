import React from "react";
import { Router } from "@reach/router";
// import { useSelector } from "react-redux";
// import { selectUser } from "./reducers/userSlice/userSlice";

import LogIn from "./components/LogIn/LogIn";
import Home from "./components/LogOut/Home/Home";
import HomeDetailsInner from "./components/LogOut/HomeDetailsInner/HomeDetailsInner";

const App = () => {
  // const user = useSelector(selectUser);
  // console.log(user);

  return (
    <React.Fragment>
      <Router>
        <LogIn path="/" />
        <Home path="home" />
        <HomeDetailsInner path="/home/:id" />
      </Router>
    </React.Fragment>
  );
};

export default App;
