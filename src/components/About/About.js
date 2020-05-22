import React, { useState, useEffect } from 'react';
import classes from './About.module.css';

import QualificationItems from './qualifications/QualificationItems';
import SkillItems from './skills/SkillItems';
import ServiceItems from './services/ServiceItems';

import useDataFirebase from '../../hooks/dataFirebase';
import Spinning from '../UI/Spinning/Spinning';
import Modal from '../UI/Modal/Modal';

const Aboutme = () => {
  const [qualifications, setQualifications] = useState('');
  const [skills, setSkills] = useState('');
  const [services, setServices] = useState('');
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
        'https://my-resume-25e08.firebaseio.com/about.json',
        'GET'
      );
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      setQualifications(data['qualifications']);
      setSkills(data['skills']);
      setServices(data['services'])
    }
  }, [data, isLoading, error]);

  let aboutComponent;

  if (isLoading) {
    aboutComponent = <Spinning />
  }
  else if (qualifications && skills && services) {
    aboutComponent =
      <React.Fragment>
        <QualificationItems
          qualificationItems={qualifications} />
        <SkillItems
          skillItems={skills} />
        <ServiceItems
          serviceItems={services} />
      </React.Fragment>
  }

  return (
    <div className={classes.About}>
      {error && <Modal show bdClicked={clear}>{error}</Modal>}
      {aboutComponent}
    </div>
  );
};

export default Aboutme;