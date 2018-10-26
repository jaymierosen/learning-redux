import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
            {/* 🔥 if you change the h1, the title automatically refreshes */}
            {/* hot reloading the components */}
            <h1><Link to="/">Reduxagram</Link></h1>
            {/* pass components down as children from Main.js */}
            {React.cloneElement(this.props.children, this.props)}
        </div>
      </Router>
    )
  }
}

export default Main;