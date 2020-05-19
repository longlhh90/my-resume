import React, { useState, useEffect } from 'react';
import useDataFirebase from '../../hooks/dataFirebase';
import classes from './Portfolio.module.css';

import ProjectControls from './ProjectControl/ProjectControls';
import ProjectListing from './ProjectListing/ProjectListing';
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle';
import Spinning from '../UI/Spinning/Spinning';
import Modal from '../UI/Modal/Modal';

const Portfolio = () => {
  const [project, setProject] = useState('');
  const [categories, setCategories] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

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
        'https://my-resume-25e08.firebaseio.com/projects.json',
        'GET'
      );
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const cats = [];
      for (const key in data) {
        cats.push(key);
      }
      setProject(data);
      setCategories(cats);
      setSelectedCategory(cats[0]);
    }
  }, [data, isLoading, error]);

  const categoryChangedHandler = (category) => {
    setSelectedCategory(category);
  }

  let projectComponent;

  if (isLoading) {
    projectComponent = <Spinning />
  }

  else if (project && categories && selectedCategory) {
    projectComponent =
      <React.Fragment>
        <ProjectControls
          categorySelected={categoryChangedHandler}
          categories={categories}
          activeCategory={selectedCategory}
          btnType="ButtonCat"
          activeBtnType="ButtonCatActive" />

        <ProjectListing
          projects={project[selectedCategory]}
        />
      </React.Fragment>
  }

  return (
    <React.Fragment>
       {error && <Modal show bdClicked={clear}>{error}</Modal>}
    <div className={classes.Portfolio} >
      <SectionTitle title='Portfolio' />
      {projectComponent}
    </div>
    </React.Fragment>
  );
};

export default Portfolio;