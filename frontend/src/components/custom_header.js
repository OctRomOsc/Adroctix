import React, {useContext} from 'react'

import PageContext from '../context/PageProvider';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


//import "./styles/Header.css";

function  Header() {
    const { setCurrentPage } = useContext(PageContext);
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
                <Button color="inherit" onClick={ () => setCurrentPage("") } > Home </Button>
                <Button color="inherit" onClick={ () => setCurrentPage("projects") } > Projects </Button>
                <Button color="inherit" onClick={ () => setCurrentPage("contacts") } > Contact </Button>
            </Toolbar>
        </AppBar>
  );
}

export default Header;