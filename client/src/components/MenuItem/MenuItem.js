import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

function MenuItem({title, imageUrl, size, history, linkUrl, match}) {
    return (
        <div className={`${size} menuItem`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
