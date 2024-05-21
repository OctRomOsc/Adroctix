import React, {useState, useEffect} from 'react'

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import MenuItems from '../items/MenuItems';


//import "./styles/Header.css";

function  Header({ setProjectsPage }) {
  const [clicked,setClicked] = useState(true);
  return (
    <AppBar position="sticky">
            <Toolbar>
                {/*Inside the IconButton, we 
                    can render various icons*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/*This is a simple Menu 
                      Icon wrapped in Icon */}
                    <MenuIcon />
                </IconButton>
                {/* The Typography component applies 
                     default font weights and sizes */}
 
                <Typography
                    variant="h3"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    align="center"
                >
                    Adroctix
                </Typography>
                <ul className={clicked ? 'Navbar__list' : 'Navbar__listMobile'}>
                {MenuItems.map((item)=>{
                        return(
                        <Button>
                            <li key={item.id}><a className={clicked ? item.cName : 'Navbar__listMobile__item'} href={item.url}>{item.label}</a></li>
                        </Button>
                        )
                    })}
                </ul>
                
            </Toolbar>
        </AppBar>
  );
}

export default Header;
/*<Button color="inherit"  > Home </Button>
                <Button color="inherit" onClick={ () => setProjectsPage(true) } > Projects </Button>
                <Button color="inherit"  > Contact </Button>*/