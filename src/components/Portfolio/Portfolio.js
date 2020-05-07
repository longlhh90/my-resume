import React from 'react';
import classes from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={classes.Portfolio} >
      <section className="col-md-12">
        <div className="col-md-12 content-header bottom_15">
          <div className="section-title top_30 bottom_30"><span /><h2>Portfolio</h2></div>
          <div id="portfolio-tab">
            <div className={classes.PortfolioTab}>Individual</div>
            <div className={classes.PortfolioTab}>Group</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;