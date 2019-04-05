import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ( props ) => (
    <NavLink
        className="NavigationItem"
        to={props.link}
        activeStyle={{
            textDecoration: 'none'
        }}
    >
        <span className="NavigationItem">{props.children}</span>
    </NavLink>
);

export default navigationItem;
