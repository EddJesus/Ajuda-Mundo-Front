import { useState } from "react";
import { Routing } from "./routes/index";
import { Home, Ong, User } from "./pages";
import "./App.css";
import { EditOng } from "./pages/Ong/editOng/EditOng";
import { CreateOng } from "./pages/Ong/editOng/CreateOng";
import { EditAtividadeOng } from "./pages/Ong/editAtividadeOng/EditAtividadeOng";
import { CreateAtividadeOng } from "./pages/Ong/createAtividadeOng/createAtividadeOng";
import { AtividadeOng } from "./pages/Ong/atividadeOng/atividadeOng";
import { AtividadeUser } from "./pages/User/atividadeUser/atividadeUser";
import { EditUser } from "./pages/User/atividadeUser/EditUser";

function App() {
  return <Ong />;
}

export default App;
