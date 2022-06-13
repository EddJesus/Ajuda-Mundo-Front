import { useState } from "react";
import { Home, Ong, User } from "./pages";
import "./App.css";
import { EditOng } from "./pages/Ong/editOng/EditOng";
import { EditAtividadeOng } from "./pages/Ong/editAtividadeOng/EditAtividadeOng";
import { CreateAtividadeOng } from "./pages/Ong/createAtividadeOng/createAtividadeOng";
import { AtividadeOng } from "./pages/Ong/atividadeOng/atividadeOng";
import { AtividadeUser } from "./pages/User/atividadeUser/atividadeUser";

function App() {
  return <AtividadeUser />;
}

export default App;
