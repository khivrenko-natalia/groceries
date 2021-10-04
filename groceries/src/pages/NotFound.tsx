import React from 'react';

/** Fallback 404 - not found page component. */
class NotFound extends React.Component {
    render() {
        return <section className="content">
            <h1>404</h1>
            The page you are looking for does not exist.
        </section>
    }
}

export default NotFound;