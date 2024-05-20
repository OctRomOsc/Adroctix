import React, {useState, useContext, useEffect} from 'react';

import './styles/App.css';

import PageContext from "./context/PageProvider";

import Header from "./components/custom_header";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  const { homePage, setHomePage, contactsPage, setContactsPage, projectsPage, setProjectsPage } = useContext(PageContext);
  useEffect(() => console.log(homePage), [typeof homePage]);
  useEffect(() => console.log(projectsPage), [typeof projectsPage]);
  useEffect(() => console.log(contactsPage), [typeof contactsPage]);
  return (
    <div><Header/>
      <div className="App">
        
        <Home/>
        { homePage ? ( 
          <Home setHomePage={setHomePage}/>
        ) : projectsPage ? (
          <Projects setProjectsPage={setProjectsPage}/>
        ) : contactsPage ? (
          <Contacts setContactsPage={setContactsPage} />
        ) :(<Home/>)
        };
      
        
      </div> 
    </div>
  );
}

export default App;

