import React, { useState, createContext, useContext } from 'react';

import { AppBar, Badge, Box, Button, Collapse, Container, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Menu, MenuItem, Slide, Stack, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { AccountBalance, AddIcCall, ChevronLeft, Close, ExpandLess, ExpandMore, FormatListBulleted, Login, ShoppingCartCheckout } from '@mui/icons-material';

import { Link } from 'react-router-dom';

import DastehBandy from './DastehBandy';
//context
import { reducerContext } from './ReducerProvider.jsx';


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

export const GoOpen = createContext();

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const { state } = useContext(reducerContext)
  console.log(state)
  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenu(open);
  };
  
    return (
      <>
        <div style={{position: 'relative', zIndex: '5', height: '1px'}}>
            <HideOnScroll>
                <AppBar sx={{bgcolor: '#F1FAFB'}}>
                    <Container>
                    <Toolbar>
                        <Typography color="#4993FA" sx={{cursor: 'pointer', fontWeight: 700, fontSize: '1.4rem', flexGrow: 1}}><Link to='/' style={{textDecoration: 'none', color: '#4993FA'}}>بای شاپ</Link></Typography>
                        <Stack sx={{display: {xs: 'none', sm: 'flex'}, justifyContent: 'center', alignItems: 'center'}} spacing='10px' direction="row">
                            <Button onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} sx={{fontSize: '1rem', pr: '20px', ml: '10px'}} endIcon={!open ? <ExpandMore sx={{pr: '7px'}} /> : <ExpandLess sx={{pr: '7px'}} />}>دسته بندی</Button>
                            <DastehBandy open={open} />
                            <Button sx={{fontSize: '1rem'}}>درباره ما</Button>
                            <Button sx={{fontSize: '1rem'}}>تماس با ما</Button>
                            <Link style={{textDecoration: 'none'}} to='/login-page' ><Button size='small' variant='outlined'>ورود | ثبت نام  <Login sx={{mr: '10px'}} /></Button></Link>
                        </Stack>
                        <Link to='/shop-cart'>
                          <IconButton sx={{mr: 3}}>
                            <Badge badgeContent={state.itemsCounter} color='primary' sx={{color: '#4993FA'}}>
                              <ShoppingCartCheckout sx={{color: '#4993FA', fontSize: '31px'}} />
                            </Badge>
                          </IconButton>
                        </Link>
                          <IconButton onClick={() => setMenu(!menu)} sx={{display: {xs: 'flex', sm: 'none'}}}>
                              <FormatListBulleted sx={{color: '#4993FA'}} />
                          </IconButton>
                        <Drawer anchor='left' open={menu} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
                            <List sx={{bgcolor: '#F1FAFB', width: '180px', fontWeight: 700, fontSize: '0.9rem', height: '100%' }}>
                              <ListSubheader sx={{color: '#4993FA', bgcolor: '#F1FAFB', fontSize: '20px'}}>بای شاپ</ListSubheader>
                              <Divider variant='middle' />
                              <Box sx={{mt: '25px'}}>
                              <ListItemButton sx={{color: '#088395'}} onClick={() => setOpen(!open)}>
                                  <ListItemIcon>{!open ? <ExpandMore sx={{color: '#088395', fontSize: '16px'}} /> : <ExpandLess sx={{color: '#088395', fontSize: '16px'}}/>}</ListItemIcon>
                                  دسته بندی
                              </ListItemButton>
                              <Collapse in={open}>
                                <List sx={{mr: 3}} disablePadding>
                                  <ListItemButton onClick={() => setMenu(false)}>
                                    <Link style={{textDecoration: 'none'}} to='/products/jewelery'><Typography sx={{fontWeight: 500, color: '#0A4D68'}}>جواهرات</Typography></Link>
                                  </ListItemButton>
                                  <ListItemButton onClick={() => setMenu(false)}>
                                  <Link style={{textDecoration: 'none'}} to="/products/men's clothing"><Typography sx={{fontWeight: 500, color: '#0A4D68'}}>مردانه</Typography></Link>
                                  </ListItemButton>
                                  <ListItemButton onClick={() => setMenu(false)}>
                                  <Link style={{textDecoration: 'none'}} to='/products/electronics'><Typography sx={{fontWeight: 500, color: '#0A4D68'}}>الکترونیک</Typography></Link>
                                  </ListItemButton>
                                  <ListItemButton onClick={() => setMenu(false)}>
                                  <Link style={{textDecoration: 'none'}} to="/products/women's clothing"><Typography sx={{fontWeight: 500, color: '#0A4D68'}}>زنانه</Typography></Link>
                                  </ListItemButton>
                                </List>
                              </Collapse>
                              <Divider />
                              <ListItemButton onClick={() => setMenu(false)} sx={{color: '#088395'}}>
                                  <ListItemIcon><AccountBalance sx={{color: '#088395'}} /></ListItemIcon>
                                  درباره ما
                              </ListItemButton>
                              <Divider />
                              <ListItemButton onClick={() => setMenu(false)} sx={{color: '#088395'}}>
                                  <ListItemIcon><AddIcCall sx={{color: '#088395'}} /></ListItemIcon>
                                  تماس با ما
                              </ListItemButton>
                            <Link onClick={() => setMenu(false)} to='/login-page' style={{textDecoration: 'none'}}><ListItemButton sx={{mt: '72px'}}><Button size='small' variant='outlined'>ورود | ثبت نام  <Login sx={{mr: '10px'}} /></Button></ListItemButton></Link>
                              </Box>
                            </List>
                        </Drawer>
                    </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
        </div>
        </>
    );
};

export default Navbar;