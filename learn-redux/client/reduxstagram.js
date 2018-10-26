// let's go!
// coming from our node modules folder
import React from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// import react router deps
import { Router, Route, IndexRoute, broswerHistory } from 'react-router';

// Redux provider
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      {/* top level: if path is "/", show Main component/home page */}
      <Route path="/" component={App}>
      {/* IndexRoute will also be the PhotoGrid homepage */}
      <IndexRoute component={PhotoGrid}></IndexRoute>
      {/* When photo is clicked on, show Single component */}
      <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))