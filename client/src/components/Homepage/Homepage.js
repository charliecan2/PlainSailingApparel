import React from 'react';
import './homepage.scss';

function Homepage() {
    return (
        <div className="homepage">
            <div className="directoryMenu">
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">WOMENS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
                <div className="menuItem">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;

