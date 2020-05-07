import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../components/Profile/Profile';

class Page extends Component {
    render() {
        const PageComponent = this.props.component;

        return (
            <div className='container'>
                <Row >
                    <Col md={4}>
                        <Profile />
                    </Col>
                    <Col md={8}>
                        <PageComponent />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Page;