import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        <p>I'm the photo grid</p>
      </div>
    )
  }
}

export default PhotoGrid;