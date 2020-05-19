import React from 'react';
import classes from './About.module.css';
import SectionTitle from '../UI/SectionTitle/SectionTitle';

const Aboutme = () => {
  return (
    <div className={classes.About} >
      {/* Text Section */}
      <section>
        <SectionTitle title='About Me' />

        <p >
          <ul>
            <li>5 years of work experience in IT</li>
            <li>Bachelor degree in Management Information System</li>
            <li>Profound knowledge of Java, Python to perform data analysis and Javacript (React) for front-end website development</li>
            <li>Proficient in ERP system, SQL, Balsamiq, Microsoft Visio, and Microsoft Office Suite</li>
            <li>Acquired strong analytical, problem-solving, communication and interpersonal skills</li>
            <li>Extensive experience in analyzing requirements collecting from stakeholders to propose them appropriate and efficient solutions</li>
            <li>Coordinated with a 5-person team and successfully redesigned Cost Project Management module in an ERP product used by the top 10 Construction companies in Singapore</li>
            <li>Result-oriented, goal-driven individual, quick learner and ability to adapt well to changing requirements from clients</li>
          </ul>
        </p>
      </section>

      <section>
        <SectionTitle title='My Skills' />
        <div className="row">
          <div className="col-md-6 bar-grids">
            <h6>WEB DESIGN  <span> 80% </span></h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped active" style={{ width: '80%' }}>
              </div>
            </div>
            <h6>UI DESIGN &amp; DEVELOPER <span> 70% </span></h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped active" style={{ width: '70%' }}>
              </div>
            </div>
            <h6>HTML/CSS<span>90% </span></h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped active" style={{ width: '90%' }}>
              </div>
            </div>
            <h6>PHOTOSHOP <span> 75% </span></h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped active" style={{ width: '75%' }}>
              </div>
            </div>
          </div>
          <div className="col-md-6 bar-grids">
            <h6>PROJECT MANAGEMENT <span> 85% </span></h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped active" style={{ width: '85%' }}>
              </div>
            </div>
            <h6>SOCIAL MEDIA MARKETING<span> 95% </span></h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped active" style={{ width: '95%' }}>
              </div>
            </div>
            <h6>UX DEVELOPER<span>80% </span></h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped active" style={{ width: '80%' }}>
              </div>
            </div>
            <h6>PHP DESIGN<span> 60% </span></h6>
            <div className="progress">
              <div className="progress-bar progress-bar-striped active" style={{ width: '60%' }}>
              </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </section>
      {/* My Services Section */}
      <section>
        <SectionTitle title='My Services' />

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
  );
};

export default Aboutme;