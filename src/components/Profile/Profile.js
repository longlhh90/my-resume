import React, { useState, useEffect } from 'react';
import useDataFirebase from '../../hooks/dataFirebase';
import classes from './Profile.module.css';

import ProfileListing from './ProfileListing/ProfileListing';
import Button from '../UI/Button/Button';
import Spinning from '../UI/Spinning/Spinning';
import Modal from '../UI/Modal/Modal';

const Profile = () => {
    const [profile, setProfile] = useState('');
    const {
        isLoading,
        error,
        data,
        sendRequest,
        clear
    } = useDataFirebase();

    //Load menu from server
    useEffect(() => {
        const timer = setTimeout(() => {
            sendRequest(
                'https://my-resume-25e08.firebaseio.com/profile.json',
                'GET'
            );
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [sendRequest]);

    useEffect(() => {
        if (!isLoading && !error && data) {
            setProfile(data);
        }
    }, [data, isLoading, error]);

    let profileComponent;

    if (isLoading) {
        profileComponent = <Spinning />
    }

    else if (profile) {
        profileComponent =
            <ProfileListing
                profile={profile}
            />
    }

    return (
        <React.Fragment>
            {error && <Modal show bdClicked={clear}>{error}</Modal>}
            <div className={classes.Profile}>
                {profileComponent}
                <div className={classes.ButtonArea}>
                    <a href="https://drive.google.com/open?id=10v5XdcTwSIITKvMXtCqa47hHVttg7hlC" target="_blank" rel="noopener noreferrer">
                        <Button
                            btnType="Icon"
                            icon="fa fa-download">
                            Download Resume
                        </Button>
                    </a>
                    <a href="mailto:me@longlhh.ca" target="_blank" rel="noopener noreferrer">
                        <Button
                            btnType="Icon"
                            icon="fa fa-paper-plane">
                            Hire Me
                        </Button>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Profile;