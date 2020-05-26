import React from 'react';
import classes from './SectionTitle.module.css';

const SectionTitle = (props) => {
  return (
    <div className={classes.SectionTitle}>
      <h2><span>{props.title}</span></h2>
    </div>
  );
};

export default SectionTitle;