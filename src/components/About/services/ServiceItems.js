import React from 'react';
import classes from './ServiceItems.module.css';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ServiceItems = (props) => {
    const items = [];
    for (let key in props.serviceItems) {
        items.push({
            id: key,
            name: props.serviceItems[key].name,
            desc: props.serviceItems[key].desc,
            icon: props.serviceItems[key].icon
        })
    }

    const listItem = items.map(e => {
        return (
            <Col md={4} key={e.id}>
                <div className={classes.Service}>
                    <div className={classes.Icon}>
                        <i className={e.icon} />
                    </div>
                    <span>{e.name}</span>
                    <p className="little-text">{e.desc}</p>
                </div>
            </Col>
        )
    })

    return (
        <section>
            <SectionTitle title='My Services' />
            <Row>
                {listItem}
            </Row>
        </section>
    );
};

export default ServiceItems;