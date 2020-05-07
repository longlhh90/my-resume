import React from 'react';
import classes from './Experience.module.css';

const Resume = () => {
    return (

        <div className={classes.Resume}>
            <section>
                <div className="section-title top_30 bottom_45">
                    <span /><h2>Working and Education</h2>
                </div>
                <div>
                    {/* Working Exp */}
                    <div className="padding_15">
                        <ul className={classes.TimeLine}>
                            <li>
                                <i className="fa fa-suitcase" aria-hidden="true" />
                                <h2>Working Experience</h2>
                            </li>

                            <li>
                                <h3>BlueApp Studio, Saskatoon, SK, Canada</h3>
                                <span>Jan 2020 - Present</span>
                                <p className="little-text">Junior Software Engineer</p>
                            </li>

                            <li><h3>Vietnam Payment Solution Company (VNPAY), Vietnam</h3>
                                <span>May 2019 - Oct 2019</span>
                                <p className="little-text">Senior Business Analyst</p>
                            </li>

                            <li><h3>TrueMoney, Vietnam</h3>
                                <span>May 2018 – Apr 2019</span>
                                <p className="little-text">Product Owner</p>
                            </li>

                            <li><h3>Synergix Technologies Pte Ltd, Vietnam</h3>
                                <span>Mar 2015 – Feb 2018</span>
                                <p className="little-text">Business Analyst</p>
                            </li>
                        </ul>
                    </div>
                    {/* Education */}
                    <div className="padding_15 padbot_30">
                        <ul className={classes.TimeLine}>
                            <li>
                                <i className="fa fa-graduation-cap" aria-hidden="true" />
                                <h2>Education and Training</h2></li>

                            <li>
                                <h3>React Course</h3>
                                <span>2020</span>
                                <p className="little-text">ComIT Saskatoon</p>
                            </li>

                            <li>
                                <h3>Python for Data Science and Machine Learning Bootcamp</h3>
                                <span>2019</span>
                                <p className="little-text">Udemy Online Course</p>
                            </li>

                            <li>
                                <h3>The Complete App Design Course - UX, UI and Design Thinking</h3>
                                <span>2019</span>
                                <p className="little-text">Udemy Online Course</p>
                            </li>

                            <li>
                                <h3>Master of International Business</h3>
                                <span>2012 - 2014</span>
                                <p className="little-text">
                                    Latrobe University, Australia <br />
                                    Evaluated by WES in July 2017</p>
                            </li>

                            <li>
                                <h3>Bachelor of Management Information Systems</h3>
                                <span>2008 - 2012</span>
                                <p className="little-text">
                                    Academy of Finance, Vietnam <br />
                                    Evaluated by WES in July 2017</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;