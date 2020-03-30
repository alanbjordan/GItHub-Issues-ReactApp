import React, { Component } from 'react';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            .then(res => res.json())
            .then((result) => {
                console.log(result[0])
                this.setState({
                    isLoaded: true,
                    issues: result
                });
                console.log(this.state);
            });

    }
    render() {
        const { isLoaded, issues } = this.state;

        return (
            <div>
                <ul>

                    {issues.length > 0 ? (
                        issues.map(issue => (
                            <li key={issue.name}>
                                {issue.title}
                            </li>
                        ))
                    ) : (
                            <li>No Data</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


export default IssueList;