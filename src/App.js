import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Page from './containers/Page';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Layout>
      <Switch>
        <Route
          path='/exp'
          render={props => (
            <Page {...props} component={Experience} />
          )}
        />
        <Route
          path='/portfolio'
          render={props => (
            <Page {...props} component={Portfolio} />
          )}
        />
        <Route
          path='/contact'
          render={props => (
            <Page {...props} component={Contact} />
          )}
        />
        <Route
          path='/' exact
          render={props => (
            <Page {...props} component={About} />
          )}
        />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
}

export default App;
