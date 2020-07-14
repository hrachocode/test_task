import React from 'react';
import {Helmet} from "react-helmet";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Posts() {
    const { index } = useParams();
    const count = useSelector(state => state.posts);
    return (
        <div className="unique-post">
            <Helmet>
                <title>{count[index].name}</title>
            </Helmet>
            <div className="about">
                <h1 className="post-name">{count[index].name}</h1>
                <h3 className="post-author">{count[index].author}</h3>
            </div>
            <div className='content' dangerouslySetInnerHTML={{ __html: count[index].content }} />
        </div>
    );
}


export default Posts; 