/* istanbul ignore file */
import { React} from 'react';
import { Routes } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';
import ErrorPage from './errorpage';
import Home from '../home/Home';
import AboutUs from '../home/Aboutus';
import ContactUs from '../home/ContactUs';

const Body = (props) => {


    return (
        <div className="body-container">
           
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/about-us" element={<AboutUs />} />
                    <Route exact path="/contact-us" element={<ContactUs />} />
                    <Route exact path="/error" element={<ErrorPage />} />
                    <Route path="*" element={<Navigate replace to="/error" />} />
                </Routes> 
        </div>
    );
};
export default Body;
