import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectItem from '../ProjectItem/ProjectItem';
import classes from './ProjectListing.module.css';

class MenuListing extends Component {
    render() {
        const displayCols = 2;
        //split array into pair of row each
        let rows = [];
        let cols = [];
        let count = 1;
        const projects= [];
        for (let key in this.props.projects) {
            projects.push( {
                projectId: key,
                project: this.props.projects[key].prjName,
                image: this.props.projects[key].imgURL,
                link: this.props.projects[key].link, 
                description: this.props.projects[key].Desc,
            })
        }

        projects.forEach(project => {
                if (count%2===0) {
                    // add to cols
                    cols.push(project);
                    // add to rows
                    rows.push(cols);
                    // reset cols array
                    cols = [];
                } else {
                    cols.push(project);
                }
                // for last elements
                if (count === projects.length && cols.length > 0) {
                    // fill cols to the limit
                    for (let i = cols.length; i< displayCols; i++) {
                        cols.push({});
                    }
                    rows.push(cols);
                    cols = [];
                }
                count++;
            }
        );
        
        // transform!!
        let listing = rows.map((row, ridx) => {
            return (
                <Row key={ridx}>
                    {
                        row.map((col, cidx) => {
                            if (Object.keys(col).length !== 0) {
                                // valid column
                                return (
                                    <Col lg={true} key={col.projectId}>
                                        <ProjectItem 
                                            imageSrc={col.image}
                                            title={col.project}
                                            link={col.link}
                                            description={col.description}
                                            add={() => this.props.add(col)}
                                        />
                                    </Col>
                                );
                            } else {
                                // filled column
                                return (
                                    <Col key={cidx}></Col>
                                )
                            }
                            
                        })
                    }
                </Row>
            );
        })
        
        return (
            <React.Fragment>
                <Container className={classes.ProjectListing}>
                    {listing}

                </Container>

            </React.Fragment>
        );
            
        
    }
}

export default MenuListing;