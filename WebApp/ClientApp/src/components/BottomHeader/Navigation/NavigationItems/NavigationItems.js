import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
import HomeIcon from '@material-ui/icons/AccountBalance';
import Chat from '@material-ui/icons/Chat';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Badge from '@material-ui/core/Badge';

const navigationItems = ( props ) => (
    <nav className="NavigationItems">
        <NavigationItem link="/">
            <div>
                
                <Badge className={navigationItems.margin} variant="dot" color="secondary"><HomeIcon /> </Badge>
                
            </div> 
            <div>Accounts</div>
        </NavigationItem>

        <NavigationItem link="/Chat">
            <div>
                <Chat/> 
            </div> 
            <div>Chat</div>
        </NavigationItem>

        <NavigationItem link="/Budget">
            <div>
                <AttachMoney/> 
            </div> 
            <div>Budget</div>
        </NavigationItem>

      
    </nav>
);

export default navigationItems;
