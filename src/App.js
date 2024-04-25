import { useState } from 'react';
import './App.scss';
import user from './images/user.png';
import SideNav from './common/sidenav';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './common/body';
import GlobalLoader from './common/global-loader';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function App() {
    const [loggedInUser] = useState({ first_name: 'Ashok', last_name: 'Kamepalli', role: { role_name: 'Admin' } });
    const navDropdownTitle = (
        <img alt="user" src={user} className="user-icon" />
    );
    const onLogout = () => {
        // sessionStorage.removeItem('token');
        // let redirect_url = LOGOUT_URL;
        // redirect_url = redirect_url.replace(/client_key/, keysContext.client_id);
        // window.location.href = redirect_url;
    };
    return (
        <div className="App">
            {/* <header className="App-header">
                    <div className='ml-20px'>
                        <svg width="115" height="30" viewBox="0 0 115 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M82.8045 18.9022C82.8045 18.2486 82.9979 17.9852 83.6381 17.9852H85.3646L86.1983 21.053C87.1376 21.7233 88.2598 22.0896 89.4136 22.1026C91.7562 22.1026 92.8166 20.9355 92.8166 19.5791C92.8166 18.3453 91.9071 17.3283 89.9555 16.7614C89.4028 16.6014 88.6442 16.3679 88.1665 16.2312C84.9586 15.3142 82.6828 13.8387 82.6828 10.5974C82.6828 6.68431 85.8465 5.05453 89.4186 5.05453C91.7108 4.98422 93.9722 5.59613 95.9161 6.81268V10.6925C95.9161 11.3994 95.666 11.6095 95.0824 11.6095H93.3793L92.4623 8.39911C91.5942 7.88764 90.601 7.62785 89.5937 7.64883C87.693 7.64883 86.4342 8.47414 86.4342 10.0664C86.4342 11.6587 88.0014 12.4581 90.0264 13.0467C90.6099 13.2134 91.1201 13.3676 91.5611 13.4944C94.4489 14.3238 96.7472 15.982 96.7472 19.0114C96.7472 23.3614 93.2934 24.7311 89.4453 24.7311C87.0801 24.8068 84.752 24.1283 82.7978 22.7937L82.8045 18.9022ZM80.1893 19.6959C80.2001 19.621 80.194 19.5448 80.1714 19.4726C80.1488 19.4005 80.1104 19.3343 80.0589 19.279C80.0074 19.2236 79.9442 19.1805 79.8738 19.1529C79.8035 19.1252 79.7279 19.1136 79.6525 19.119C79.289 19.119 79.0806 19.4157 78.6988 19.7859C78.1262 20.4525 77.418 20.9893 76.6214 21.3605C75.8248 21.7317 74.9583 21.9287 74.0795 21.9384C71.1551 21.9384 68.5058 19.2507 68.5058 14.8949C68.5058 10.9001 70.4915 7.75887 74.0795 7.75887C74.966 7.76985 75.845 7.92151 76.6839 8.20821L77.6559 11.612H79.3323C79.8634 11.612 80.1893 11.4603 80.1893 10.695V6.81352C78.4022 5.59397 76.2718 4.97791 74.1096 5.05536C68.2632 5.05536 64.3926 8.7084 64.3926 14.8924C64.3926 21.4348 68.3649 24.7294 73.7811 24.7294C76.066 24.7586 78.3042 24.0811 80.1893 22.7895V19.6959ZM114.527 19.6959C114.538 19.6211 114.532 19.5449 114.509 19.4728C114.487 19.4008 114.448 19.3346 114.397 19.2793C114.346 19.224 114.283 19.1809 114.212 19.1531C114.142 19.1254 114.067 19.1137 113.991 19.119C113.627 19.119 113.418 19.4157 113.037 19.7859C112.464 20.4526 111.756 20.9895 110.959 21.3607C110.163 21.7318 109.296 21.9288 108.417 21.9384C105.494 21.9384 102.844 19.2507 102.844 14.8949C102.844 10.9001 104.829 7.75887 108.417 7.75887C109.304 7.76976 110.183 7.92143 111.022 8.20821L111.994 11.612H113.67C114.201 11.612 114.527 11.4603 114.527 10.695V6.81352C112.74 5.5938 110.61 4.97773 108.447 5.05536C102.601 5.05536 98.7305 8.7084 98.7305 14.8924C98.7305 21.4348 102.704 24.7294 108.12 24.7294C110.404 24.7584 112.642 24.0809 114.527 22.7895V19.6959Z" fill="#425A70" />
                            <path d="M15.0117 5.99925C16.5744 6.00065 18.1099 6.40875 19.467 7.18344C20.8242 7.95812 21.9563 9.0727 22.7522 10.4176C23.6134 8.39874 24.6403 6.4547 25.8225 4.6054C24.1621 2.87853 22.1124 1.57428 19.8448 0.801722C17.5772 0.0291616 15.1576 -0.189259 12.7883 0.164728C10.419 0.518714 8.1689 1.43482 6.22614 2.83643C4.28337 4.23805 2.70441 6.08443 1.6213 8.22119C0.538187 10.358 -0.0175957 12.723 0.000424628 15.1185C0.018445 17.514 0.609745 19.8704 1.72488 21.9907C2.84001 24.1109 4.44657 25.9333 6.4102 27.3055C8.37384 28.6778 10.6375 29.5599 13.0118 29.8782V23.7826C10.8536 23.2907 8.95222 22.021 7.67087 20.216C6.38951 18.4111 5.818 16.1973 6.06551 13.9976C6.31301 11.7979 7.36217 9.76652 9.0126 8.29141C10.663 6.8163 12.799 6.00088 15.0126 6.00092L15.0117 5.99925Z" fill="#425A70" />
                            <path d="M44.74 0.12207V6.21769C46.1943 6.54774 47.5438 7.23384 48.6674 8.21438C49.7909 9.19492 50.6533 10.4392 51.1771 11.8354C51.7009 13.2317 51.8697 14.7361 51.6683 16.2137C51.4669 17.6913 50.9016 19.0957 50.0233 20.3008C49.1449 21.506 47.981 22.474 46.636 23.1181C45.291 23.7622 43.8071 24.0621 42.3175 23.9909C40.828 23.9197 39.3794 23.4796 38.102 22.7102C36.8246 21.9408 35.7583 20.8661 34.9989 19.5827C34.1374 21.6016 33.1102 23.5456 31.9277 25.3949C33.5881 27.1216 35.6377 28.4258 37.9052 29.1983C40.1727 29.9708 42.5922 30.1893 44.9614 29.8353C47.3306 29.4814 49.5807 28.5654 51.5234 27.1639C53.4662 25.7624 55.0451 23.9162 56.1283 21.7795C57.2115 19.6429 57.7674 17.278 57.7495 14.8826C57.7317 12.4872 57.1406 10.1308 56.0257 8.01057C54.9108 5.89033 53.3045 4.06783 51.3411 2.69544C49.3777 1.32305 47.1143 0.440666 44.74 0.12207Z" fill="#8F9494" />
                            <path d="M40.7617 6.1191V0.0693359C31.6149 0.96884 28.5696 8.14736 26.0895 13.7911C23.0508 20.7104 21.1876 22.8937 16.9902 23.7991V29.8788C25.8794 28.961 29.164 21.8142 31.5999 16.1695C34.0591 10.4749 35.9223 6.83271 40.7617 6.1191Z" fill="#0DA59D" />
                            <path d="M54.6641 28.287C54.6706 28.0702 54.7408 27.8601 54.866 27.683C54.9911 27.5059 55.1656 27.3695 55.3678 27.2909C55.5699 27.2123 55.7907 27.1949 56.0026 27.2409C56.2146 27.287 56.4083 27.3944 56.5596 27.5498C56.7109 27.7052 56.8131 27.9017 56.8534 28.1148C56.8938 28.3279 56.8705 28.5481 56.7866 28.7481C56.7026 28.948 56.5616 29.1188 56.3812 29.2392C56.2007 29.3596 55.9889 29.4242 55.772 29.4249C55.6236 29.4261 55.4765 29.3973 55.3396 29.3401C55.2026 29.283 55.0787 29.1987 54.9751 29.0924C54.8716 28.9861 54.7907 28.8599 54.7372 28.7215C54.6838 28.5831 54.6589 28.4353 54.6641 28.287ZM55.772 29.6508C56.0398 29.6466 56.3003 29.5633 56.521 29.4115C56.7416 29.2597 56.9125 29.0461 57.0122 28.7976C57.1119 28.549 57.136 28.2766 57.0815 28.0144C57.0269 27.7522 56.8962 27.5119 56.7056 27.3238C56.515 27.1356 56.2731 27.0079 56.0102 26.9567C55.7474 26.9055 55.4752 26.9331 55.228 27.036C54.9807 27.1388 54.7693 27.3125 54.6204 27.535C54.4714 27.7576 54.3915 28.0192 54.3906 28.287C54.3898 28.4678 54.4251 28.6469 54.4945 28.8139C54.5639 28.9809 54.6659 29.1323 54.7945 29.2594C54.9232 29.3864 55.0759 29.4865 55.2438 29.5537C55.4116 29.6209 55.5912 29.6539 55.772 29.6508ZM55.4844 28.3954H55.7578L56.1746 29.0748H56.4406L55.9946 28.3845C56.0501 28.3844 56.1049 28.3729 56.1558 28.3508C56.2068 28.3288 56.2526 28.2965 56.2906 28.2561C56.3286 28.2157 56.358 28.1679 56.3769 28.1157C56.3958 28.0636 56.4038 28.0081 56.4006 27.9527C56.4006 27.6434 56.218 27.5067 55.847 27.5067H55.2501V29.0748H55.4877L55.4844 28.3954ZM55.4844 28.1936V27.7084H55.8078C55.9746 27.7084 56.1496 27.7443 56.1496 27.9385C56.1496 28.1794 55.9696 28.1936 55.7678 28.1936H55.4844Z" fill="#8F9494" />
                        </svg>
                    </div> 


                    <div className={(window.location.pathname === '/userError' || (window.location.pathname === '/error' && !loggedInUser)) ? 'error-user' : 'app-heading'}>Ashok Kamepalli</div>
                    {loggedInUser && loggedInUser.role && loggedInUser.role.role_name ? (
                        <div className="login-info">
                            <Card className="card-style login-card">
                                <Navbar bg="light" expand="lg">
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto d-flex">
                                            <NavDropdown
                                                title={loggedInUser ? navDropdownTitle : ''}
                                                className="nav-dropdown-title"
                                                id="collapsible-nav-dropdown">
                                                <span className='usr-name-txt'>
                                                    {loggedInUser && loggedInUser.first_name && loggedInUser.first_name
                                                        ? loggedInUser.first_name + ' ' + loggedInUser.last_name
                                                        : ''}
                                                </span>
                                                <NavDropdown.Item>
                                                    Role:{' '}
                                                    {loggedInUser && loggedInUser.role && loggedInUser.role.role_name
                                                        ? loggedInUser.role.role_name
                                                        : 'No Role Assigned'}
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Card>
                        </div>
                    ) : (<></>)}
                </header> */}
            <Router>
                <GlobalLoader />
                <div className="mh-100">
                    <div class="container-fluid justify-content-between align-items-center nav1">
                        <div class="left-side d-flex">
                            <div class="mail-add text-white">
                                <a class="nav-link ps-3" href="mailto:viisveducation@gmail.com"><EmailTwoToneIcon color='white'></EmailTwoToneIcon>viisveducation@gmail.com</a>
                            </div>
                            <div class="mobile  ps-3 text-white">
                                <a class="nav-link" href="tel:+91 9600136010"><PhoneIcon></PhoneIcon>
                                    +91 9600136010</a>
                            </div>
                            <div class="timer ps-3 text-white">
                                <a class="nav-link" href="#"><AccessTimeIcon></AccessTimeIcon> Mon - Sat: 8.00am to
                                    8.00pm</a>
                            </div>
                        </div>
                        <div class="right-side d-flex">
                            <div class="help d-flex pe-3 align-items-center">
                                <a class="nav-link text-white px-1" href="https://test.com/contact-us ">Support</a>
                            </div>
                            <div class="social">
                                <ul class="d-flex px-0 text-white social-links">
                                    <a class="nav-link" href="https://www.facebook.com/test" target="_blank"><FacebookRoundedIcon></FacebookRoundedIcon></a>
                                    <a class="nav-link" href="https://www.instagram.com/test/" target="_blank"><InstagramIcon></InstagramIcon></a>
                                    <a class="nav-link" href="https://wa.me/917331110062?text=I'm%20planning%20to%20study%20abroad,%20can%20you%20help%20me?" target="_blank"><WhatsAppIcon></WhatsAppIcon></a>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <SideNav />
                    {/* {(clientContext && clientContext.service && clientContext.service.value) ||
                            (selectedClient && selectedClient.label) ||
                            (selectedService && selectedService.label) ? (
                                <ClientContext.Provider value={clientContext}>
                                    <Body changeService={handleCustomerChange} />
                                </ClientContext.Provider>
                            ) : !userContext ? (
                                <Body />
                            ) : (<></>)} */}
                    <Body />
                </div>
            </Router>

            <footer>
                <span className="cpy-right">
                    Copyright ©{new Date().getFullYear()} VIISV Guru. All Rights Reserved
                </span>
                {/* <section class="footer_section mt-5 ">
                    <div class="container">
                        <div class="row mt-lg-5 pt-3 pb-3 footer-menu">
                            <div class="col-lg-3 col-md-6 mt-1 col-sm-6 text-light ">
                                <div class="cards">
                                    <h3 class="px-4 mb-4 mt-4">Quick Links</h3>
                                    <ul>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/about-us">Why Choose Us ?</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/contact-us">Register</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mt-1 col-sm-6 text-light">
                                <div class=" cards">
                                    <h3 class="px-4 mb-4 mt-4">Test Prep</h3>
                                    <ul>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/direct-interviews/courses/ielts">IELTS</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/direct-interviews/courses/toefl">TOEFL</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/direct-interviews/courses/pte">PTE</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/direct-interviews/courses/duolingo">Duolingo</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/direct-interviews/courses/sat">SAT</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/direct-interviews/courses/gre">GRE</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/direct-interviews/courses/gmat">GMAT</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mt-1 col-sm-6 text-light">
                                <div class=" cards">
                                    <h3 class="px-4 mb-4 mt-4">Admission</h3>
                                    <ul>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/study-overseas/countries/usa">USA</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/study-overseas/countries/uk">UK</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/study-overseas/countries/canada">Canada</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/study-overseas/countries/australia">Australia</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/study-overseas/countries/ireland">Ireland</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/study-overseas/countries/france">France</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/study-overseas/countries/new-zealand">New Zealand</a>
                                        </li>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="https://test.com/study-overseas/countries/germany">Germany</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 mt-1 col-sm-6 text-light">
                                <div class=" cards">
                                    <h3 class="px-4 mb-4 mt-4">Contact Us</h3>
                                    <ul>
                                        <li>
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a href="tel:91 73 3111 0061">+91 73 3111 0061/62/ 63</a>
                                        </li>
                                        <li class="d-flex">
                                            <iconify-icon class="mt-1" icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <span>
                                                <a href="#" class="text-decoration-none text-light">
                                                    SQUARE ONE OVERSEAS
                                                    #211,212,2nd Floor,
                                                    Alluri Trade Center
                                                    NH-65, Kukatpally Housing Board colony (KPHB)
                                                    Kukatpally, Hyderabad
                                                    Telangana -500072
                                                </a>
                                                <br />
                                                <a href="#" class="text-decoration-none text-light">
                                                    Next to South India Shopping mall
                                                </a>
                                            </span>
                                        </li>
                                        <li class="d-flex email-fl">
                                            <iconify-icon icon="mdi:keyboard-arrow-right"></iconify-icon>
                                            <a class="email-bt" href="mailto:info@test.com">info@test.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid footer-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-4 text-light mt-4 text-start ">
                                    <h5 class="mb-4">Connect with us</h5>
                                    <a href="https://www.facebook.com/test" target="_blank"><img width="30" src="https://test.com/images/themes/logos/footer-facebook.png" alt="" /></a>
                                    <a href="https://www.instagram.com/test/" target="_blank"><img width="30" src="https://test.com/images/themes/logos/footer-insta.png" alt="" /></a>

                                    <a href="https://wa.me/917331110062?text=I'm%20planning%20to%20study%20abroad,%20can%20you%20help%20me?" target="_blank">
                                        <img width="37" src="https://test.com/images/themes/logos/whatsapp.png" alt="" /></a>
                                </div>
                                <div class="col-lg-3 text-light mt-4">
                                    <h5 class="text-start">Subscribe with us</h5>
                                    <div class="input-group mb-3 mt-4">
                                        <input id="subscribeEmail" type="email" class="form-control py-2 " placeholder="Enter your email address" required="" />
                                        <button class="btn " type="button" id="button-addon2" onclick="subscribe()"><img width="20" src="https://test.com/images/themes/logos/arrow logo.png" alt="" /></button>
                                    </div>
                                    <div class="response-msg-subscribe mt-4"></div>
                                </div>
                            </div>
                        </div>
                        <div class="container mt-4  d-lg-flex mx-sm-auto text-start justify-content-between align-items-center "><p class="text-light">Copyright © SQUARE ONE OVERSEAS. All rights reserved</p>
                            <div class="d-lg-flex justify-content-center align-items-center ">
                                <p class="ms-lg-auto text-light">Design And Developed By </p>
                                <a href="https://prodigit.in" target="_blank"> 
                                    <img width="80px" src="https://test.com/images/themes/logos/prologo.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section> */}
            </footer>
        </div>
    );
}

export default App;
