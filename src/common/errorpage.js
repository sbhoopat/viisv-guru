import React, { useEffect } from 'react';
import { Button } from '@mui/material';

const ErrorPage = () => {
    const viewDashboard = () => {
        sessionStorage.setItem('isFromErrorPage', false);
        window.location.pathname = '/dashboard';
    }
    useEffect(() => {
        /* istanbul ignore next */
        if (window.location.pathname === '/error') {
            sessionStorage.setItem('isFromErrorPage', true);
            if (document.querySelector('#sidebar-menu')) document.querySelector('#sidebar-menu').remove();
            if (document.querySelector('#menu-bar')) document.querySelector('#menu-bar').remove();
        }
    }, []);

    return (
        <div className='ml20'>
            <hr className='error-margin' />
            <h1 className='error-css'>404</h1>
            <h1 className='error-css'>OOPS! Page Not Found</h1>
            <p className='error-par'>Sorry the page you`re looking for doesn`t exists</p>
            <Button className='btn-primary' data-testid="return-home" onClick={viewDashboard}>Return To Home</Button>
        </div>
    );
};
export default ErrorPage;
