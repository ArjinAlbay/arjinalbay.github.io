import React, { useContext } from "react";
import AppRouter from "./router/Router";
import { ThemeContext } from "./context/ThemeContet";

import "./assets/styles/global.css";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  );
};

export default App;
