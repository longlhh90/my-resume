import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './ContactItems.module.css';

const ContactItem = (props) => {

    const listing = Object.keys(props.listing).map(
        contact => {
            return [...Array(props.listing[contact])].map(
                () => {
                    let value = props.listing[contact][1];

                    if (contact === 'phone') {
                        value = <a href="tel:3069148559">{props.listing[contact][1]}</a>;
                    } else if (contact === 'email') {
                        value = <a href={`mailto:${props.listing[contact][1]}`}>{props.listing[contact][1]}</a>;
                    }

                    return (<Col md={4} key={contact} className={classes.Col}>
                        <i className={[classes.Icon, props.listing[contact][0]].join(' ')} aria-hidden="true" />
                        <h3><span>{contact}</span></h3>
                        {value}
                    </Col>)

                }
            )
        }
    )

    return (
        <Row>
            {listing}
        </Row>
    )
};

export default ContactItem;