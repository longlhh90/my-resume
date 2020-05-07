import React from 'react';
import classes from './Footer.module.css';
// import Logo from '../Logo/Logo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (props) => {
    return (
        <React.Fragment >
            <Row className={classes.Footer}>
                <Col md={12} >
                </Col>
                <Col md={4} >
                    <div className={classes.FooterItem}>
                        <li>Saskatoon, SK Canada</li>
                        <li><a href="tel:3069148559">(306) 914-8559</a></li>
                    </div>
                </Col>
                <Col md={4} >

                </Col>
                <Col md={4} >
                    <div className={classes.FooterItem}>© 2020 – By <a href="mailto:longlhh90@gmail.com"><strong>longlhh90@gmail.com </strong></a></div>
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default Footer;