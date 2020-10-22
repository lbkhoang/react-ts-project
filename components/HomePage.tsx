import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className='jumbotron'>
            <h1>ello</h1>
            <p>hello form the other side</p>
            <Link to="/about" className="btn btn-primary">
                About
            </Link>
        </div>
    );
}

export default HomePage;
