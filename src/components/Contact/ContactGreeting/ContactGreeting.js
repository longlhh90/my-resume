import React from 'react';
import classes from './ContactGreeting.module.css';

const OpeningTime = () => {
    return (
        <div className={classes.Section}>
        <div className={classes.Header}>
            <h2>Contact Me</h2>
            <span>Get In Touch!</span>
        </div>
        <div className={classes.Content}>
            <p>
                <span>.</span>
            </p>
        </div>

    </div>
    );
};

export default OpeningTime;