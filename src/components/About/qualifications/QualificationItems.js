import React from 'react';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import classes from './QualificationItems.module.css';

const QualificationItems = (props) => {
    const items = [];
    for (let key in props.qualificationItems) {
        items.push({
            id: key,
            value: props.qualificationItems[key]
        })
    }

    const listItem = items.map(e => {
        return (
            <li key={e.id}>
                {e.value}
            </li>
        )
    })

    return (
        <section>
            <SectionTitle title='About Me' />
            <ul className={classes.Qualification}>
                {listItem}
            </ul>
        </section>
    );
};

export default QualificationItems;