import React, { Component } from 'react';
import ListContainer from './containers/ListContainer';
import Button from './components/Buttons';
import Jumbotron1 from './components/Jumbotron';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Jumbotron1 />
      <ListContainer />
      <Button />
    </div>
    );
  }
}

export default App;
