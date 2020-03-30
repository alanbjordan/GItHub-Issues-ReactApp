import React from 'react';
import './issue.css';

const Issue = (props) => {
    // const { title } = props;

    return (
        <div className="issueBody">
            <h3>Issue:</h3>
            <div className="props">
                {props.issue.title}
            </div>
            <p><a href={props.issue.html_url}>Issue Link</a></p>
        </div>
    )
}

export default Issue;