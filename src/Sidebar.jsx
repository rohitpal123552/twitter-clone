import React from 'react';
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';
const Sidebar = () => {
   return( 
   <div className="sidebar">
      <TwitterIcon className="twitter_icon" />
       <SidebarOption active Icon={HomeIcon} text="Home"/>
       <SidebarOption Icon={SearchIcon} text="Explore" />
       <SidebarOption  Icon={NotificationsNoneIcon} text="Notification"/>
       <SidebarOption  Icon={MailOutlineIcon} text="Message"/>
       <SidebarOption  Icon={BookmarkBorderIcon} text="Bookmark"/>
       <SidebarOption  Icon={ListAltIcon} text="Lists"/>
       <SidebarOption  Icon={PersonOutlineIcon} text="Profile"/>
       <SidebarOption  Icon={MoreHorizIcon} text="More"/>

       <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
       
      
    </div>
    );
}

export default Sidebar;