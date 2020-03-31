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
          <div>
            {/* <div className="listHeader">Hello</div> */}
            <ul>
              {issues.map(issue => (
                <div key={issue.id} className="issueBg">
                  <h1>Isssue</h1>
                  {issue.title}
                  <br></br>
                  <Link 
                  to={`/issue/${issue.number}`}>
                    <button>See More Details</button>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        );
      }
    }



export default IssueList;