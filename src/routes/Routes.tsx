import React from "react";

import {
  Home,
  Ong,
  User,
  AtividadeOng,
  EditAtividadeOng,
  CreateAtividadeOng,
  LoginUser,
  RegisterUser,
} from "../pages";
import { RootState } from "../store";

import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

const Routing = () => {
  const { isAuth } = useSelector((state: RootState) => state.login);
  const { user } = useSelector((state: RootState) => state.user);

  const authenticated = isAuth === true && user.email !== "";

  console.log(authenticated);

  return (
    <Router>
      {authenticated ? (
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="/register-user" element={<RegisterUser />} />
        </Routes>
      )}
    </Router>
  );
};

export { Routing };
