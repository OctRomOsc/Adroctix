import React, { useContext } from "react";

import "./styles/App.css";

import PageContext from "./context/PageProvider";

import Header from "./components/custom_header";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  const { currentPage } = useContext(PageContext);
  return (
    <div>
      <Header />
      <div className="App">
        {currentPage === "projects" ? (
          <Projects />
        ) : currentPage === "contacts" ? (
          <Contacts />
        ) : (
          <Home />
        )}
        ;
      </div>
    </div>
  );
}

export default App;
