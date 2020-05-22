import React, { useState, useEffect } from 'react';
import classes from './Experience.module.css';
import ExpItem from './ExpItem/ExpItem';
import SectionTitle from '../UI/SectionTitle/SectionTitle';
import useDataFirebase from '../../hooks/dataFirebase';

import Spinning from '../UI/Spinning/Spinning';
import Modal from '../UI/Modal/Modal';

const Resume = () => {
    const [exp, setExp] = useState('');
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
                'https://my-resume-25e08.firebaseio.com/experience.json',
                'GET'
            );
        }, 500);
        return () => {
            clearTimeout(timer);
        };
    }, [sendRequest]);

    useEffect(() => {
        if (!isLoading && !error && data) {
            setExp(data);
        }
    }, [data, isLoading, error]);

    let expComponent;

    if (isLoading) {
        expComponent = <Spinning />
    }
    else if (exp) {
        expComponent =
            <React.Fragment>
                <ExpItem
                    expItems={exp.working}
                    title='Working Experience'
                    icon='fa fa-suitcase' />
                <ExpItem
                    expItems={exp.education}
                    title='Education and Training'
                    icon='fa fa-graduation-cap' />
            </React.Fragment>
    }

    return (

        <div className={classes.Resume}>
            {error && <Modal show bdClicked={clear}>{error}</Modal>}
            <section>
                <SectionTitle title='Working and Education' />
                {expComponent}
            </section>
        </div>
    );
};

export default Resume;