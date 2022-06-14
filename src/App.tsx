import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Routing } from "./routes/index";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
