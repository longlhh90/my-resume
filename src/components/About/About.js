import React from 'react';
import classes from './About.module.css';

const Aboutme = () => {
    return (
        <div id="about" className={classes.About} >
          {/* Text Section */}
          <div className="row">
            <section className="col-md-12 padding_30 padbot_45">
              <div className="section-title">
                  <span />
                  <h2>About Me</h2>
                  </div>
              <p className="top_30">
              • 5 years of work experience in IT
              • Bachelor degree in Management Information System
              • Profound knowledge of Java, Python to perform data analysis and Javacript (React) for front-end website development
              • Proficient in ERP system, SQL, Balsamiq, Microsoft Visio, and Microsoft Office Suite
              • Acquired strong analytical, problem-solving, communication and interpersonal skills
              • Extensive experience in analyzing requirements collecting from stakeholders to propose them appropriate and efficient solutions
              • Coordinated with a 5-person team and successfully redesigned Cost Project Management module in an ERP product used by the top 10 Construction companies in Singapore
              • Result-oriented, goal-driven individual, quick learner and ability to adapt well to changing requirements from clients
                </p>
            </section>
          </div>
          {/* My Services Section */}
          <div className="row">
            <section className="col-md-12 padding_30 padbot_45">
              <div className="section-title bottom_45"><span /><h2>My Services</h2></div>
              <div className="row">
                {/* a service */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className={classes.Service}>
                    <div className="icon">
                      <i className="fa fa-code" />
                    </div>
                    <span>Web Development</span>
                    <p className="little-text">Although I've just started to code since 2020, I've made 2 websites in React by my own.</p>
                  </div>
                </div>
                {/* a service */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className={classes.Service}>
                    <div className="icon">
                      <i className="fa fa-chart-pie" />
                    </div>
                    <span>Business System Analysis</span>
                    <p className="little-text">Proficient in ERP system, SQL, Balsamiq, Microsoft Visio, and Microsoft Office Suite.</p>
                  </div>
                </div>
                {/* a service */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className={classes.Service}>
                    <div className="icon">
                      <i className="fa fa-chart-line" />
                    </div>
                    <span>Data Analysis</span>
                    <p className="little-text">Profound knowledge of Java, Python to perform data analysis. I also self-learnt basic machine learning to improve my skill in this field.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>         
        </div>
    );
};

export default Aboutme;