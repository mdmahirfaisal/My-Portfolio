// import * as React from 'react';
// import './Home.css';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ListItem from '@mui/material/ListItem';
// import CloseIcon from '@mui/icons-material/Close';
// import { Link } from 'react-router-dom';
// import About from '../About/About';
// import Projects from '../Projects/Projects';
// import Contact from '../Contact/Contact';
// import Footer from '../Footer/Footer';
// import Banner from '../Banner/Banner';
// // import Flip from 'react-reveal/Flip';



// const drawerWidth = 210;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: `-${drawerWidth}px`,
//         ...(open && {
//             transition: theme.transitions.create('margin', {
//                 easing: theme.transitions.easing.easeOut,
//                 duration: theme.transitions.duration.enteringScreen,
//             }),
//             marginLeft: 0,
//         }),
//     }),
// );

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     backgroundColor: "black",
//     transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const Home = () => {
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);

//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar open={open} className="bg-light text-dark">
//                 <Toolbar className="d-flex align-items-center">
//                     <IconButton onClick={handleDrawerClose}
//                         sx={{ mr: 2, ...(!open && { display: 'none' }) }}
//                         className="fs-2">
//                         {theme.direction === 'ltr' ? <CloseIcon className="fs-1" /> : <CloseIcon className="fs-1" />}
//                     </IconButton>
//                     <IconButton
//                         color="inherit"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         sx={{ mr: 2, ...(open && { display: 'none' }) }}

//                     >
//                         <MenuIcon className="fs-1" />
//                     </IconButton>
//                     <br />
//                     <Typography variant="h6" noWrap component="div">
//                         Mahir Faisal
//                     </Typography>
//                     <button className="btn btn-outline-info px-md-5 py-1 rounded-pill ms-auto me-md-5">Resume</button>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 sx={{
//                     width: drawerWidth,
//                     flexShrink: 0,
//                     '& .MuiDrawer-paper': {
//                         width: drawerWidth,
//                         boxSizing: 'border-box',
//                     },
//                 }}
//                 variant="persistent"
//                 anchor="left"
//                 open={open}
//             >

//                 <List className="border-0 text-light shadow-sm" style={{ height: '100vh', paddingTop: '65px', backgroundColor: "#33d9b2" }}>

//                     <ListItem button>
//                         <Link to="/">About</Link>

//                     </ListItem>
//                     <ListItem button>
//                         <Link to="/">Projects</Link>

//                     </ListItem>
//                     <ListItem button>
//                         <Link to="/">Contact</Link>

//                     </ListItem>

//                 </List>

//             </Drawer>
//             <Main open={open} className="border-0" style={{ paddingTop: '65px' }}>
//                 <div className="home-background bg-light">
//                     <Banner></Banner>
//                     <About></About>
//                     <Projects></Projects>
//                     <Contact></Contact>
//                     <Footer></Footer>
//                 </div>

//             </Main>
//         </Box>
//     );
// };

// export default Home;