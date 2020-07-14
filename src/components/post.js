import React from 'react';
import { Link } from 'react-router-dom';


function Post({ data }) {
    return (
        <div className="post-container">
            {data.length > 0 ?
                data.map((elem, index) => <Link key={index} to={`/posts/${index}`}><div className="post-item">
                    <h1 className="name">{elem.name}</h1>
                    <p>{elem.date}</p>
                    <p>Автор: {elem.author}</p>
                </div></Link>)
                : <div>Вы пока не создали ни одной записи, <Link to='/add-post'>Создайте одну</Link></div>}
        </div>
    );
}


export default Post;