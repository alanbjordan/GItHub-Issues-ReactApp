import React from 'react';
import './App.css';
import IssueList from './components/IssueList';
import Issue from './components/Issue';
import './components/issues.css';
import { 
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
          <Route path='/' exact component={IssueList} />
          <Route path='/issue/:issue_number?' component={Issue}/>
      </Router>
    </div>
  );
}
export default App;