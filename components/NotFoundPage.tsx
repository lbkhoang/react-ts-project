import React from 'react';
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className='jumbotron'>
            <h1>Page not found</h1>
            <p>Sorry for the inconvenience</p>
            <Link to="/">
                Back to Home page
            </Link>
        </div>
    );
}

export default NotFoundPage;
