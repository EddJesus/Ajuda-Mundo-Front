import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {
  Home,
  Ong,
  User,
  AtividadeOng,
  EditAtividadeOng,
  CreateAtividadeOng,
} from "../pages";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ong" element={<Ong />} />
        <Route path="/user" element={<User />} />
        <Route path="/create-activity" element={<CreateAtividadeOng />} />
        <Route path="/update-activity" element={<EditAtividadeOng />} />
      </Routes>
    </Router>
  );
};

export { Routing };
