import React from 'react';
import classes from './SectionTitle.module.css';

const SectionTitle = (props) => {
  return (
    <div className={classes.SectionTitle}>
      <span />
      <h2>{props.title}</h2>
    </div>
  );
};

export default SectionTitle;