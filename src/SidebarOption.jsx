import React from 'react';
import "./SidebarOption.css";



const SidebarOption = ({ active,text,Icon}) => {
   return( 
     <div className={`sidebar_option ${ active && "sidebar_option--active"}`}>
        <Icon />
      <h3>{text}</h3>

    </div>
    );
}

export default SidebarOption;