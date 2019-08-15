import React, { Component } from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer';
const data=require('./data.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <FileExplorer data={data}/>
        </div>
      </div>
    );
  }
}


export default App;
