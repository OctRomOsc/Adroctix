import { createContext, useState } from "react";

const PageContext = createContext({})

export const PageProvider = ({children}) => {
    const [ homepage, setHomePage ] = useState();
    const [ contactspage, setContactsPage ] = useState(false);
    const [ projectspage, setProjectsPage ] = useState(false);
   
    return (
        <PageContext.Provider value={{homepage, setHomePage, contactspage, setContactsPage, projectspage, setProjectsPage}}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContext;