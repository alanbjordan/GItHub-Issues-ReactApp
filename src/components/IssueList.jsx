import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './issues.css';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            .then(res => res.json())
            .then((result) => {
                console.log(result[0])
                this.setState({
                    issues: result
                });
                // console.log(this.state);
            });
    }

    render() {
        const { issues } = this.state;

        return (
          <ul>
            {issues.map(issue => (
              <div key={issue.id} className="issueBg">
                <h1>Isssue Title: </h1>
                {issue.title}
                <br></br>
                <Link 
                issue={issues}
                to={`/issue/${issue.number}`}>
                  See More Details
                </Link>
              </div>
              // <Link to={`/issue/${issue.number}`}/>
              // <Issue key={issue.id} issue={issue} />
            ))}
          </ul>
        );
      }
    }



export default IssueList;