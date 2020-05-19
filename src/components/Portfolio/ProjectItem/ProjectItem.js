import React from 'react';
import classes from './ProjectItem.module.css';
import Button from '../../UI/Button/Button';

const ProjectItem = (props) => {
    return (
        <React.Fragment>
            <div className={classes.ProjectItem}>
                <img className={classes.Image} src={props.imageSrc} alt={props.title}></img>
                <div className={classes.DescriptionContainer}>
                    <div className={classes.TitleRowContainer}>
                        <div className={classes.Title}>{props.title}</div>
                    </div>
                    <div className={classes.Description}>{props.description}</div>
                    <div className={classes.ViewControls}>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <Button btnType="ButtonFormSmall">View</Button>
                        </a>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default ProjectItem;