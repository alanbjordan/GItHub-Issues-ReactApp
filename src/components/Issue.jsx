import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        };
    }

    componentDidMount() {
        const number = this.props.match.params.issue_number;
        console.log(number);
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${number}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    issues: result
                });
            });
    }
    
    render() {
        console.log("returning data: ", this.state.issues)
        const data  = this.state.issues;
        return (
            <div>
                <div>
                    <h1 className="errorTitle"><span className="error">Error:</span> {data.title}</h1>                    
                </div>
                <div className="markDown">
                    <ReactMarkdown source={data.body} escapeHtml={false}/>                  
                </div>
            </div>
        )
    }
}

export default Issue;