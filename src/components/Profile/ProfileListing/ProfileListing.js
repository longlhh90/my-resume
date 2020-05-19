import React from 'react';
import classes from './ProfileListing.module.css';

const ProfileListing = (props) => {
    return (
        <React.Fragment>
            <div className={classes.ProfileName}>
                <span className={classes.Name}>{props.profile.name}</span><br />
                <span className={classes.Job}>{props.profile.job}</span>
            </div>
            <figure className={classes.ProfileImage}>
                <img src={props.profile.imgLink} alt="Long Le" />
            </figure>
            <ul className={classes.ProfileInfo}>
                <li />
                <li><p><span>Full Name: </span>{props.profile.profileInfo.fullname}</p></li>
                <li><p><span>Birthday: </span>{props.profile.profileInfo.birthday}</p></li>
                <li><p><span>Knowledge: </span>{props.profile.profileInfo.knowledge}</p></li>
                <li><p><span>Email: </span>{props.profile.profileInfo.email}</p></li>
                <li><p><span>LinkedIn: </span> <a href={props.profile.profileInfo.linkedin}> Long Le </a></p></li>
            </ul>
        </React.Fragment>
    );
};

export default ProfileListing;