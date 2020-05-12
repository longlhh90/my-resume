import React, { useState, useEffect } from 'react';
import classes from './Portfolio.module.css';
import ProjectControls from './ProjectControl/ProjectControls';
import ProjectListing from './ProjectListing/ProjectListing';
// import Modal from '../../components/UI/Modal/Modal'

const Portfolio = () => {
  const Prjs = {
    Individual: [
      {
        prjName: 'ComIT Final Project',
        imgURL: 'https://dficlub.org/wp-content/uploads/2019/09/dcfdsdf.jpg',
        link: 'linkTest1',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      },
      {
        prjName: 'Pokemon Data Set',
        imgURL: 'https://dficlub.org/wp-content/uploads/2019/09/dcfdsdf.jpg',
        link: 'linkTest2',
        desc: 'In posuere fringilla accumsan. Mauris orci augue, porta ac sem ut, consectetur consectetur lorem. Curabitur ullamcorper, turpis vitae ullamcorper fringilla, tortor tellus mattis nisi, eget varius mi ligula vel elit. Etiam gravida, augue sit amet eleifend dapibus, sapien neque ultricies ante, id consectetur lorem odio vitae massa. Fusce et enim lacus. In aliquet quam nec neque efficitur, nec sollicitudin metus ultrices. Duis orci urna, suscipit at accumsan iaculis, eleifend at nunc. Aenean nec eleifend velit.'
      }
    ],
    Group: [
      {
        prjName: 'TrueMoney Ewallet',
        imgURL: 'https://dficlub.org/wp-content/uploads/2019/09/dcfdsdf.jpg',
        link: 'linkTest3',
        desc: 'Etiam id ante nisi. Mauris laoreet mauris tellus, sit amet porttitor odio egestas id. Curabitur consectetur vehicula enim, sit amet luctus risus. Nullam congue diam sit amet ligula porta egestas. Donec eleifend a elit vel maximus. In quam leo, faucibus vitae facilisis et, scelerisque vitae eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent odio mauris, vestibulum quis odio a, porta posuere libero. Nulla fringilla tortor elit, vitae efficitur sem luctus vel. Phasellus ligula lorem, bibendum eu vestibulum placerat, venenatis et leo. Pellentesque eu lorem eu orci sollicitudin vulputate. Donec facilisis volutpat lectus ut facilisis. Cras dapibus felis mollis felis sodales, vitae feugiat erat scelerisque. Phasellus sed vestibulum lorem, eu dictum orci. Curabitur porta elementum leo vel tincidunt.'
      },
      {
        prjName: 'Synergix ERP Cost Management',
        imgURL: 'https://dficlub.org/wp-content/uploads/2019/09/dcfdsdf.jpg',
        link: 'linkTest4',
        desc: 'Etiam at viverra urna, sed pharetra urna. Ut sit amet aliquam velit, eu mollis lorem. Duis laoreet metus nec semper ullamcorper. Ut eros turpis, tincidunt nec laoreet id, condimentum a ipsum. Mauris lacinia ullamcorper enim sit amet viverra. Proin malesuada magna ut massa mollis tincidunt congue vel lectus. Etiam quis quam rhoncus, eleifend leo lacinia, interdum lorem. Morbi a diam non purus faucibus rutrum. Pellentesque consequat neque vel neque vestibulum euismod. Aenean sed aliquam ligula. Sed sit amet condimentum erat, bibendum ultrices risus.'
      }
    ]
  }
  const Cats = ['Individual', 'Group'];
  const [project, setProject] = useState(Prjs);
  const [categories, setCategories] = useState(Cats);
  const [selectedCategory, setSelectedCategory] = useState('Individual');

  const categoryChangedHandler = (category) => {
    setSelectedCategory(category);
  }
  useEffect(() => {
    setProject(Prjs);
    setCategories(Cats);
  }, [Prjs, Cats]);

  return (
    <div className={classes.Portfolio} >
      <section className="col-md-12">
        <div className="col-md-12 content-header bottom_15">
          <div className="section-title top_30 bottom_30">
            <span />
            <h2>Portfolio</h2>
          </div>
        </div>
      </section>
        <ProjectControls
          categorySelected={categoryChangedHandler}
          categories={categories}
          activeCategory={selectedCategory}
          btnType="ButtonMenu"
          activeBtnType="ButtonMenuActive" />

        <ProjectListing
          projects={project[selectedCategory]}
        />
    </div>
  );
};

export default Portfolio;