import React, { useEffect } from 'react';
import MPage from './pages/main-route';
import AddPost from './pages/add-post';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from './pages/posts';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MPage} />
          <Route path="/add-post" component={AddPost}></Route>
          <Route path="/posts/:index" component={Posts} />
          <Route path='*' component={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
