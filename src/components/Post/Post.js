import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.name + ' ' + props.lname}</h1>
        <div className="Info">
            <div className="Author">{props.institution}</div>
        </div>
    </article>
);

export default post;