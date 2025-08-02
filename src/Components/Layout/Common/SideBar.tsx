import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, type CSSProperties } from '@mui/material'
import React, { type FC } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { ConstructionOutlined, Style } from '@mui/icons-material';

interface SideBarProps{
        drawerWidth: number,
        mobileOpen:boolean,
        handleDrawerToggle:() => void
}

interface menuItem{
  menuName: string,
  path: string,
  icon: React.ComponentType
}

  const sideBarStyle : CSSProperties = {
        textDecoration: "none",
        color: "inherit",
        display: "block"
  }
  const activeLinkStyle: CSSProperties = {
          backgroundColor : "rgba(0,0,0,0.08)"
  }

const SideBar:FC <SideBarProps> = ({drawerWidth,mobileOpen,handleDrawerToggle}) => {
  const MenuItems:menuItem[]=[
    {menuName:"Home",path:"/",icon:HomeIcon},
    {menuName:"Report",path:"/report",icon:EqualizerIcon}
  ]

  const drawer = (

    <div>
      <Toolbar />
      <Divider />
      <List>{MenuItems.map((item, index) => (
        <NavLink key ={item.menuName} to={item.path} style={({isActive}) =>{
          console.log("選択されたメニューは",item.menuName, isActive)
          return{
           ...sideBarStyle,
           ...(isActive ? activeLinkStyle: {})
          }
        }}>
          <ListItem key={index} disablePadding> 
            <ListItemButton  >
              <ListItemIcon >
                <item.icon/>
              </ListItemIcon>
              <ListItemText primary={item.menuName} />
            </ListItemButton>
          </ListItem>
        </NavLink>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (

    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        >
        {/* モバイル用 */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
          >
          {drawer}
   
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
          
        </Drawer>
    </Box>

  )
}

export default SideBar