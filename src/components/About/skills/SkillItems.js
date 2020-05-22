import React from 'react';
import classes from './SkillItems.module.css';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SkillItems = (props) => {
    const items = [];
    for (let key in props.skillItems) {
        items.push({
            id: key,
            name: props.skillItems[key].name,
            value: props.skillItems[key].value
        })
    }

    const listItem = items.map(e => {
        return (
            <Col md={6} key={e.id}>
                <div className={classes.Bargrids}>
                    <h6>{e.name}</h6>
                    <span>{e.value}%</span>
                    <ProgressBar animated now={e.value} variant="danger" className={classes.Bar} />
                </div>
            </Col>
        )
    })

    return (
        <section>
            <SectionTitle title='My Skills' />
            <Row>
                {listItem}
            </Row>
        </section>
    );
};

export default SkillItems;