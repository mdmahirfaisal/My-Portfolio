import React from 'react';
import Navigation from '../Navigaton/Navigation';

const NotFound = () => {
    return (
        <>
            <Navigation></Navigation>
            <div style={{ height: '100vh' }}>
                <div style={{ paddingTop: '' }}>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                </div>
            </div>
        </>
    );
};

export default NotFound;