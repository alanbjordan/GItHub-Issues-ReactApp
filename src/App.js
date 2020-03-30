import React from 'react';
import './App.css';
import IssueList from './components/IssueList'

function App() {

  return (
    <div className="App">
      <h1>2020 List of GitHub Issues</h1>      
        <IssueList/>

    </div>
  );
}

export default App;