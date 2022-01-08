import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import useViewport from "../viewport";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavbarAppBar() {

  const pages = ['About Us', 'Contact Us', 'Courses', 'Mentors'];
  const [active, setActive] = useState(2);
  const { width, height, isMobile, isTablet } = useViewport();

  const jsxDesign = () => {
    return <div style={{ marginTop: 400 }}></div>;
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );
 

  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static"
       style={{ backgroundColor: "#FFFFFF", color: "#333333"
       }}
      >
        <Toolbar>
          <img style={{ width:"90px",marginLeft:"5%" }}
             src="name.png" alt="background"/>
           
         
          <Box sx={{ flexGrow: 1 }} />
          {pages.map((page) => (
          <Typography variant="h7" sx={{display: { xs: 'none', sm:'none', md: 'flex'}, marginLeft:"2%", marginRight:"2%",}} component="div">
              {page}
            </Typography>))}
  
          <Search
           sx={{ display: isTablet?"none":"inline", borderRadius:"50px",backgroundColor:"#FBB03B"}} 
          >
            <SearchIconWrapper >
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase style={{color:"white"}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
                    
          </Search>
          <>
            <img style={{width: "40px",margin:"1%"}} src="profilepic-modified.png" alt="profile Picture"/>
          </>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            
            sx={{  display: { xs: 'block', sm: 'block',
            md: 'none' 
          }}}
          >
            <MenuIcon/>
          </IconButton>          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}