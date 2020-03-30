import React from 'react';
import logo from './logo.svg';
import './App.css';
import IssueList from './components/IssueList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Blah
      <IssueList />
      </header>
    </div>
  );
}

export default App;
