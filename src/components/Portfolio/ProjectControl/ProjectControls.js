import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './ProjectControls.module.css';

class ProjectControls extends Component {

    render() {
        const controls = this.props.categories.map(cat => {
            return (
                <Button key={cat}
                    btnType={this.props.activeCategory === cat ?
                        this.props.activeBtnType
                        : this.props.btnType}
                    onclicked={() => this.props.categorySelected(cat)}
                >
                    {cat}
                </Button>
            );
        });

        return (
            <React.Fragment>
                <div className={classes.Controls}>
                    {controls}
                </div>
            </React.Fragment>
        );
    }
}

export default ProjectControls;