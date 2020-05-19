import React from 'react';
import classes from './ExpItem.module.css';

const ExpItem = (props) => {
    const expItems = [];
    for (let key in props.expItems) {
        expItems.push({
            id: key,
            org: props.expItems[key].organization,
            period: props.expItems[key].period,
            title: props.expItems[key].title,
        })
    }

    const listItem = expItems.map(e => {
        return (
            <li key={e.id}>
                <h3>{e.title}</h3>
                <span>{e.period}</span>
                <p className="little-text">{e.org}</p>
            </li>
        )
    })

    return (
        <div style={{ 'paddingTop': '15px' }}>
            <ul className={classes.TimeLine}>
                <li>
                    <i className={props.icon} aria-hidden="true" />
                    <h2>{props.title}</h2>
                </li>
                {listItem}
            </ul>
        </div>
    );
};

export default ExpItem;