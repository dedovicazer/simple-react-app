import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostsContainer from './components/Posts/Container';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <PostsContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
