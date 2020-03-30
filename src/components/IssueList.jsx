import React, { Component } from 'react';
import Issue from './Issue';

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
                console.log(this.state);
            });

    }
    render() {
        const { issues } = this.state;
    
        return (
          <ul>
            {issues.map(issue => (
              <Issue key={issue.id} issue={issue} />
            ))}
          </ul>
        );
      }
    }



export default IssueList;