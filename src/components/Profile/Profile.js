import React from 'react';
import classes from './Profile.module.css';
import Button from '../UI/Button/Button';

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div className={classes.ProfileName}>
                <span className={classes.Name}>Long Le</span><br />
                <span className={classes.Job}>Software Engineer | Business Analyst</span>
            </div>
            <figure className={classes.ProfileImage}>
                <img src="https://i.pinimg.com/564x/2f/09/14/2f0914f277cbf58d453bb0f86537a56c.jpg" alt="" />
            </figure>
            <ul className={classes.ProfileInfo}>
                <li />
                <li><p><span>Name:</span> Huu Hoang Long Le</p></li>
                <li><p><span>Birthday:</span> 14 July 1990</p></li>
                <li><p><span>Knowledge:</span> EPR | Fintech | E-Commerce</p></li>
                <li><p><span>Email:</span> me@longlhh.ca</p></li>
                <li><p><span>LinkedIn:</span> Long Le</p></li>
            </ul>
            <div className={classes.ButtonArea}>
                {/* <Button 
                btnType="Icon"
                icon="fa fa-download">
                    Download Resume 
                </Button> */}
                <Button 
                btnType="Icon"
                icon="fa fa-paper-plane">
                    Hire Me 
                </Button>
            </div>
        </div>
    );
};

export default Profile;