import React, { useState, useEffect } from 'react';
import classes from './Portfolio.module.css';
import Modal from '../../components/UI/Modal/Modal'

const Portfolio = () => {
  const [project, setProject] = useState('');
  const [categories, setCategories] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categoryChangedHandler = (category) => {
    setSelectedCategory(category);
}

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
      <React.Fragment>
                <ProjectControls
                    categorySelected={categoryChangedHandler}
                    categories={categories}
                    activeCategory={selectedCategory}
                    btnType= "ButtonMenu"
                    activeBtnType= "ButtonMenuActive" />

                <ProjectListing
                    projects={project[selectedCategory]}
                />
            </React.Fragment>
    </div>
  );
};

export default Portfolio;