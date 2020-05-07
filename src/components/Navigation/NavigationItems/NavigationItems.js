import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <React.Fragment>
            <ul className={classes.NavigationItems} style={{ "borderTop": props.stl }}>
                <NavigationItem link='/' exact closedSD={props.closedSD}>HOME</NavigationItem>
                <NavigationItem link='/exp' closedSD={props.closedSD}>EXPERIENCE</NavigationItem>
                <NavigationItem link='/portfolio' closedSD={props.closedSD}>PORTFOLIO</NavigationItem>
                <NavigationItem link='/contact' closedSD={props.closedSD}>CONTACT</NavigationItem>
            </ul>
        </React.Fragment>
    );
};

export default NavigationItems;