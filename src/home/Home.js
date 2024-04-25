import CapImage from '../images/cap.png'
import AIImage from '../images/ai.jpg'
import Communication from '../images/communication.png'
const Home = () => {
    return (<div>
        <div>
            <div className="homebkg">
                <div className="cnt-block ">
                    <h1 className="fs-1 fw-bold text-wrap text-white">Planning to Study Abroad?</h1>
                    <p className=" fs-5 text-white"></p><div>
                        <span className="text-white">Square one overseas Promising your Dreams</span></div><p></p>
                </div>
            </div>
            <div>
                <div class="sec-title  ">
                    <h4 class="sub-title fw-bold ">About us</h4>
                    <h1 class="fw-bold ">Opening the doors and fulfilling dreams of foreign education
                    </h1>
                    <div class="text-underline-purple"></div>
                    <h4 class="mt-4 sub-title">Empowering minds and transforming lives</h4>
                    <h6 class="mt-4 lh-lg  about-us-description">Square One is a premier overseas education consulting company with global
                        accreditation. Since its inception, we have been on a mission to provide
                        comprehensive guidance, personalized counseling, and exceptional support to
                        aspiring students. Through our team of expert consultants, we enable
                        students to explore possibilities in universities across the world.
                        We help you explore a multitude of programs, universities, and countries that
                        align with your educational objectives.
                        Thousands of students trust our services owing to our expertise in the field
                        and our global accreditation.
                        Are you ready to experience the transformative power of international
                        education?
                    </h6>
                </div>
                <div class="container-fluid pt-5ren mb-20 mt-5">

                    <div class=" p-0 m-0" className="servuces">
                        <div class="container pt-5">
                            <h5 class="text-white fw-bold ms-lg-5 ms-3 mt-5 pt-5 our-txt">Our Services</h5>
                            {/* <h1 class="text-white fw-bold ms-lg-5 ms-3">Empowering minds and transforming lives</h1> */}
                            <div class="ms-lg-5 ms-3">
                                <div class="text-underline-orange">
                                </div>
                                <div class="container mt-5 " id="serviceCardSection">
                                    <div class="service-main">
                                        <div class="row ">
                                            <div class="col-lg-3 col-md-6 col-12 my-3 services-box">
                                                <div class="card card-extra card-h">
                                                    <div class="line"></div>
                                                    <div class="card-img text-center mt-4">
                                                        <img class="img-fluid" src={CapImage} alt="" />
                                                    </div>
                                                    <h6 class="text-center mt-3 fw-bold">
                                                        Abroad Education
                                                    </h6>
                                                    <div class="paragraph">
                                                        <p>We empower students to
                                                            explore the world through our
                                                            comprehensive abroad
                                                            education programs. Our
                                                            international partnerships
                                                            provide unique opportunities for
                                                            cultural immersion, academic
                                                            excellence, and personal
                                                            growth.
                                                        </p></div>
                                                    {/* <div class="d-flex justify-content-center pb-3 inner-bx">
                                                        <button id="gtbtn" class=" get-assistance-btn px-3 text-white" data-bs-toggle="modal" onclick="displayTestimonialContent(`<p>University Selection is a major step towards garnering student’s career graph. Our in-house team of mentors gives a pre-university briefing for students and acquaint them with the right university.</p>`, 'Career Counselling')" data-bs-target="#testimonialContentModal">Show More
                                                        </button>
                                                    </div> */}

                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-6 col-12 my-3 services-box">
                                                <div class="card card-extra card-h">
                                                    <div class="line"></div>
                                                    <div class="card-img text-center mt-4">
                                                        <img class="img-fluid" src={AIImage} alt="" />
                                                    </div>
                                                    <h6 class="text-center mt-3 fw-bold">
                                                        Blended AI
                                                    </h6>
                                                    <div class="paragraph">
                                                        <p>We embrace the transformative
                                                            power of artificial intelligence
                                                            (AI) to revolutionize education.
                                                            Our cutting-edge AI solutions
                                                            harness machine learning and
                                                            data analytics to personalize
                                                            learning, enhance teaching
                                                            effectiveness, and unlock new
                                                            possibilities for student success.
                                                        </p></div>
                                                    {/* <div class="d-flex justify-content-center pb-3 inner-bx">
                                                        <button id="gtbtn" class=" get-assistance-btn px-3 text-white" data-bs-toggle="modal" onclick="displayTestimonialContent(`<p>When students apply for a particular university we make sure that we accustom the students with scholarship assistance being provided by the university.</p>`, 'University Selection')" data-bs-target="#testimonialContentModal">Show More
                                                        </button>
                                                    </div> */}

                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-6 col-12 my-3 services-box">
                                                <div class="card card-extra card-h">
                                                    <div class="line"></div>
                                                    <div class="card-img text-center mt-4">
                                                        <img class="img-fluid" src={Communication} alt="" />
                                                    </div>
                                                    <h6 class="text-center mt-3 fw-bold">
                                                        Career & Communication
                                                    </h6>
                                                    <div class="paragraph">
                                                        <p>Guiding students towards
                                                            successful careers through
                                                            personalized counseling,
                                                            internships, job placement
                                                            assistance and coaching the
                                                            students on confidence building
                                                            program for effective
                                                            communication skills
                                                        </p></div>
                                                    {/* <div class="d-flex justify-content-center pb-3 inner-bx">
                                                        <button id="gtbtn" class=" get-assistance-btn px-3 text-white" data-bs-toggle="modal" onclick="displayTestimonialContent(`<p>The expert panel of Consultants are always available for the students who find it tough to select their course with universities when applying for their graduate and postgraduate courses.</p>`, 'Scholarship Assistance')" data-bs-target="#testimonialContentModal">Show More
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>
                                            {/* <div class="col-lg-3 col-md-6 col-12 my-3 services-box">
                                                <div class="card card-extra card-h">
                                                    <div class="line"></div>
                                                    <div class="card-img text-center mt-4">
                                                        <img class="img-fluid" src="https://test.com/storage/services/image-6511486dd95cd1.66057326.png" alt="" />
                                                    </div>
                                                    <h6 class="text-center mt-3 fw-bold">
                                                        Test Prep
                                                    </h6>
                                                    <div class="paragraph">
                                                        <p>Looking for a one-stop solution with your Test prep? Then you are at the right destination. Square one overseas provides you wi...
                                                        </p></div>
                                                    <div class="d-flex justify-content-center pb-3 inner-bx">
                                                        <button id="gtbtn" class=" get-assistance-btn px-3 text-white" data-bs-toggle="modal" onclick="displayTestimonialContent(`<p>Looking for a one-stop solution with your Test prep? Then you are at the right destination. Square one overseas provides you with a wide range of test series to help you We provide the latest pattern &amp; syllabus-based training and practice with our seasoned faculties, with elaborate solutions &amp; performance analysis for IELTS/TOEFL/PTE/DUOLINGO. Anything else? We got you covered.</p>`, 'Test Prep')" data-bs-target="#testimonialContentModal">Show More
                                                        </button>
                                                    </div>

                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" p-0 m-0" className="servuces1">
                        <div class="container pt-5">
                            <h5 class="text-white fw-bold ms-lg-5 ms-3 mt-5 pt-5 our-txt">VIISV GURU</h5>
                            {/* <h1 class="text-white fw-bold ms-lg-5 ms-3">Empowering minds and transforming lives</h1> */}
                            <div class="ms-lg-5 ms-3">
                                <div class="text-underline-orange">
                                </div>
                                <div class="container mt-5 " id="serviceCardSection">
                                    <div class="service-main">
                                        <div className='guru-txt'>
                                            <div class="line"></div>
                                            <div class="paragraph">
                                                <p>Experience the power of VIISV GURU, our tailor-made mentor program
                                                    designed to guide students on their educational journey and open doors
                                                    to endless opportunities. With cutting-edge technology, world-class
                                                    mentors, and a supportive community, we empower students to unlock
                                                    their full potential, achieve academic excellence, and explore a world of
                                                    possibilities. Discover a transformative educational experience like no
                                                    other.
                                                </p></div>
                                            {/* <div class="d-flex justify-content-center pb-3 inner-bx">
                                                        <button id="gtbtn" class=" get-assistance-btn px-3 text-white" data-bs-toggle="modal" onclick="displayTestimonialContent(`<p>University Selection is a major step towards garnering student’s career graph. Our in-house team of mentors gives a pre-university briefing for students and acquaint them with the right university.</p>`, 'Career Counselling')" data-bs-target="#testimonialContentModal">Show More
                                                        </button>
                                                    </div> */}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" p-0 m-0" className="servuces2">
                        <div class="container pt-5">
                            <h5 class="text-white fw-bold ms-lg-5 ms-3 mt-5 pt-5 our-txt">Our Mission and Vision</h5>
                            {/* <h1 class="text-white fw-bold ms-lg-5 ms-3">Empowering minds and transforming lives</h1> */}
                            <div class="ms-lg-5 ms-3">
                                <div class="text-underline-orange">
                                </div>
                                <div class="container mt-5 " id="serviceCardSection">
                                    <div class="service-main">
                                        <div className='guru-txt'>
                                            <div class="line"></div>
                                            <div class="paragraph">
                                                <p>At VIISV Education, our mission is to empower students by mentoring & coaching
                                                    on exceptional educational opportunities that unlock their full potential. We
                                                    envision a future where every learner can shape their own destiny through
                                                    transformative knowledge and skills.<br/>
                                                    Our vision is to be <b>"The Best Mentor"</b> that inspires and nurtures the next
                                                    generation of innovators, leaders, and global citizens. We are committed to fostering
                                                    a love of learning and equipping students with the tools they need to thrive in an
                                                    ever-changing world.
                                                </p></div>
                                            {/* <div class="d-flex justify-content-center pb-3 inner-bx">
                                                        <button id="gtbtn" class=" get-assistance-btn px-3 text-white" data-bs-toggle="modal" onclick="displayTestimonialContent(`<p>University Selection is a major step towards garnering student’s career graph. Our in-house team of mentors gives a pre-university briefing for students and acquaint them with the right university.</p>`, 'Career Counselling')" data-bs-target="#testimonialContentModal">Show More
                                                        </button>
                                                    </div> */}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <section class="why_choose">
                        <div class="container mt-5">
                            <h5 class="why-choose-us">Why Choose us</h5>
                            <h1 class="fw-bold">Few reasons to <br />Choose our <span class=" company-text">Company</span></h1>
                            <div class="text-underline-purple">
                            </div>
                            <div class="row mt-5">
                                <div class="feature-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                    <div class="inner-box">
                                        <div class="content">
                                            <div class="icon">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 240.000000 240.000000" preserveAspectRatio="xMidYMid meet">
                                                    <g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)" fill="#4C367E" stroke="none">
                                                        <path d="M395 2391 c-107 -28 -199 -103 -242 -197 -51 -112 -40 -232 31 -338
                                    l42 -63 -42 -11 c-59 -16 -124 -69 -153 -127 -24 -46 -26 -61 -29 -206 -3
                                    -135 -1 -158 13 -172 15 -15 60 -17 455 -17 393 0 440 2 455 16 14 14 16 39
                                    13 173 -3 145 -5 160 -29 206 -30 58 -94 111 -155 127 l-43 12 30 37 c54 69
                                    73 125 74 219 0 77 -3 92 -33 152 -56 115 -162 186 -289 193 -37 2 -81 1 -98
                                    -4z m154 -97 c73 -21 144 -92 165 -165 20 -65 20 -92 1 -155 -44 -149 -215
                                    -221 -358 -151 -210 104 -183 413 42 473 62 17 88 17 150 -2z m211 -609 c16
                                    -8 42 -31 57 -52 27 -35 28 -42 31 -160 l4 -123 -382 0 -382 0 3 123 c4 109 6
                                    125 28 155 50 71 56 72 349 72 214 0 268 -3 292 -15z"></path>
                                                        <path d="M1150 2384 c-19 -8 -45 -25 -58 -37 -52 -48 -52 -48 -52 -469 0 -388
                                    1 -393 23 -432 32 -57 92 -86 177 -86 l68 0 7 -37 c8 -43 21 -63 42 -63 8 0
                                    62 21 121 47 l107 48 201 5 c196 5 201 6 241 32 78 51 78 52 78 488 0 340 -2
                                    389 -17 415 -25 47 -67 84 -107 95 -21 6 -190 10 -416 10 -317 -1 -386 -3
                                    -415 -16z m820 -89 c20 -10 32 -27 39 -53 14 -49 14 -674 1 -724 -18 -64 -31
                                    -68 -240 -68 l-186 0 -90 -39 c-88 -38 -89 -39 -98 -17 -20 51 -19 51 -125 56
                                    -153 7 -141 -29 -141 429 0 396 0 395 45 419 13 8 142 11 393 12 313 0 378 -2
                                    402 -15z"></path>
                                                        <path d="M1535 2180 c-46 -10 -72 -27 -100 -65 -31 -40 -44 -107 -25 -130 27
                                    -32 80 -12 80 31 0 12 9 33 21 48 45 57 139 19 139 -55 0 -37 -28 -65 -80 -79
                                    l-41 -11 3 -81 c3 -74 5 -82 26 -89 32 -12 62 20 62 66 0 19 4 35 10 35 18 0
                                    83 65 96 97 54 127 -58 264 -191 233z"></path>
                                                        <path d="M1534 1646 c-3 -8 -4 -25 -2 -38 2 -18 10 -24 35 -26 39 -4 60 25 43
                                    58 -13 24 -68 28 -76 6z"></path>
                                                        <path d="M105 1076 c-39 -17 -70 -52 -90 -98 -22 -55 -22 -551 0 -605 21 -50
                                    42 -72 90 -94 36 -17 71 -19 365 -19 l326 0 93 -60 c88 -58 144 -90 155 -90
                                    18 0 36 39 42 90 l7 60 65 0 c88 0 143 27 178 85 l25 43 -3 299 -3 300 -27 35
                                    c-54 70 -34 68 -645 68 -434 -1 -554 -4 -578 -14z m1140 -101 l25 -24 0 -276
                                    0 -276 -25 -24 c-22 -23 -32 -25 -118 -25 -106 0 -111 -3 -124 -68 l-8 -43
                                    -87 56 -87 55 -335 0 -335 0 -28 24 -28 24 -3 270 -3 269 26 32 27 31 539 0
                                    540 0 24 -25z"></path>
                                                        <path d="M332 828 c-15 -15 -15 -51 0 -66 17 -17 279 -17 296 0 15 15 15 51 0
                                    66 -17 17 -279 17 -296 0z"></path>
                                                        <path d="M775 816 c-19 -29 -10 -54 21 -62 30 -8 54 11 54 40 0 47 -49 62 -75
                                    22z"></path>
                                                        <path d="M972 828 c-15 -15 -15 -51 0 -66 18 -18 56 -14 68 7 14 27 13 37 -6
                                    55 -18 19 -45 21 -62 4z"></path>
                                                        <path d="M332 608 c-15 -15 -15 -51 0 -66 18 -18 103 -15 122 4 21 20 20 37
                                    -2 57 -22 20 -102 23 -120 5z"></path>
                                                        <path d="M552 608 c-15 -15 -15 -51 0 -66 9 -9 77 -12 245 -12 219 0 233 1
                                    243 19 14 27 13 37 -6 55 -13 14 -49 16 -243 16 -163 0 -230 -3 -239 -12z"></path>
                                                        <path d="M1803 1069 c-70 -27 -155 -106 -189 -175 -59 -120 -33 -298 55 -378
                                    23 -21 19 -36 -10 -36 -51 0 -138 -69 -175 -140 -27 -51 -34 -299 -9 -323 15
                                    -15 59 -17 455 -17 397 0 440 2 455 17 15 14 17 35 13 152 -3 114 -8 143 -25
                                    176 -36 67 -121 135 -171 135 -32 0 -32 10 3 55 107 141 92 341 -37 461 -69
                                    65 -125 87 -228 91 -68 2 -96 -1 -137 -18z m209 -81 c48 -14 123 -78 147 -127
                                    65 -127 9 -285 -124 -347 -190 -89 -407 89 -356 293 37 144 185 225 333 181z
                                    m220 -618 c58 -39 72 -72 76 -182 l4 -98 -381 0 -381 0 0 88 c0 113 23 164 91
                                    200 43 23 47 23 300 20 253 -3 256 -3 291 -28z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h6 class="title"> Test  <br />
                                                Preps
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="feature-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                    <div class="inner-box">
                                        <div class="content">
                                            <div class="icon">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
                                                    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#4C367E" stroke="none">
                                                        <path d="M539 1267 c-190 -54 -316 -252 -279 -440 17 -87 64 -171 127 -225
                                    l53 -46 0 -78 0 -77 -82 -3 c-80 -3 -83 -4 -86 -28 -2 -21 26 -53 177 -198 99
                                    -94 185 -172 191 -172 7 0 93 77 191 172 151 145 179 176 177 198 -3 24 -6 25
                                    -85 28 l-83 3 0 77 0 78 53 46 c62 53 110 137 127 221 33 164 -58 340 -215
                                    418 -74 36 -189 48 -266 26z m239 -98 c234 -117 226 -452 -13 -561 -38 -17
                                    -68 -23 -125 -22 -99 0 -163 28 -228 99 -140 153 -96 392 90 484 52 27 72 31
                                    138 31 66 0 86 -4 138 -31z m-18 -735 c0 -49 5 -85 12 -92 7 -7 35 -12 62 -12
                                    l51 0 -123 -122 -122 -123 -122 123 -123 122 51 0 c27 0 55 5 62 12 7 7 12 43
                                    12 92 l0 81 120 0 120 0 0 -81z"></path>
                                                        <path d="M612 1128 c-6 -6 -12 -20 -12 -30 0 -9 -10 -22 -22 -29 -39 -20 -58
                                    -51 -58 -98 0 -53 28 -82 110 -115 39 -16 55 -28 55 -41 0 -45 -80 -45 -91 0
                                    -7 29 -39 42 -59 25 -30 -25 -9 -92 37 -116 15 -8 28 -21 28 -28 0 -8 8 -24
                                    18 -36 16 -19 22 -21 40 -11 13 7 22 21 22 36 0 15 7 26 20 30 33 10 60 54 60
                                    98 0 32 -6 46 -34 72 -19 18 -47 36 -63 39 -65 17 -93 55 -53 76 31 16 67 2
                                    79 -31 7 -21 16 -29 34 -29 25 0 37 16 37 50 0 22 -46 80 -64 80 -6 0 -16 15
                                    -21 33 -11 35 -41 47 -63 25z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h6 class="title"> Cost  <br />
                                                Effective
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="feature-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                    <div class="inner-box">
                                        <div class="content">
                                            <div class="icon">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 276.000000 276.000000" preserveAspectRatio="xMidYMid meet">
                                                    <g transform="translate(0.000000,276.000000) scale(0.100000,-0.100000)" fill="#4C367E" stroke="none">
                                                        <path d="M10 2351 c-12 -23 -14 -939 -2 -957 4 -6 60 -41 124 -79 95 -54 123
                                    -66 147 -62 22 5 45 -4 103 -38 l76 -44 0 -49 c0 -79 53 -152 122 -167 28 -6
                                    30 -10 30 -52 0 -93 54 -153 145 -161 l53 -4 4 -43 c12 -105 128 -171 229
                                    -131 12 5 20 -4 33 -38 41 -106 153 -143 256 -84 l36 21 68 -37 c133 -70 245
                                    -34 278 90 l11 41 38 -10 c76 -19 155 15 189 82 11 22 20 51 20 63 0 22 4 23
                                    63 23 54 0 69 4 99 27 48 37 71 89 66 148 -5 46 -4 47 35 66 64 31 82 63 82
                                    149 l0 74 70 40 c52 30 77 38 98 34 22 -4 52 9 145 62 64 38 120 73 124 79 12
                                    18 10 934 -2 957 -6 10 -21 19 -33 19 -19 0 -603 -327 -642 -360 -8 -6 -15
                                    -21 -17 -33 -2 -14 -28 -35 -83 -67 -44 -26 -93 -59 -107 -73 -23 -23 -36 -27
                                    -80 -27 -47 0 -68 9 -187 75 -205 113 -231 113 -456 -15 l-139 -80 -53 15
                                    c-28 8 -58 24 -65 34 -8 11 -52 41 -98 68 -62 36 -86 55 -90 73 -4 19 -32 41
                                    -110 88 -58 34 -111 61 -119 60 -8 -2 -19 -11 -25 -20 -17 -27 1 -47 88 -98
                                    42 -24 76 -47 76 -51 0 -4 -40 -76 -88 -161 -49 -84 -128 -222 -176 -305 -48
                                    -84 -91 -153 -96 -153 -4 0 -44 21 -89 47 l-81 48 0 418 c0 395 1 417 18 408
                                    9 -5 57 -32 106 -61 49 -28 98 -50 109 -48 29 4 44 32 28 52 -21 25 -274 166
                                    -299 166 -12 0 -26 -9 -32 -19z m2670 -499 l0 -418 -83 -47 c-46 -26 -86 -47
                                    -90 -47 -3 0 -19 24 -36 54 -38 65 -54 80 -81 71 -28 -9 -26 -46 5 -94 27 -44
                                    29 -41 -57 -90 l-57 -32 -25 43 c-225 385 -294 514 -283 524 7 7 37 26 68 43
                                    l55 31 64 -113 c104 -183 128 -217 150 -217 10 0 24 9 30 20 10 18 -3 46 -90
                                    196 -56 97 -100 180 -98 185 2 7 514 308 526 309 1 0 2 -188 2 -418z m-1917
                                    -19 l38 -24 -32 -57 c-18 -31 -91 -157 -162 -280 l-129 -222 -56 31 c-32 18
                                    -62 36 -69 41 -8 7 12 49 71 151 45 78 118 204 161 279 l78 137 31 -16 c17 -9
                                    48 -27 69 -40z m799 -15 c62 -36 131 -71 152 -78 36 -12 95 -10 166 5 27 6 15
                                    24 249 -388 19 -33 30 -58 25 -55 -5 3 -94 55 -199 115 -104 61 -197 112 -205
                                    115 -22 8 -50 -10 -50 -31 0 -27 15 -37 259 -176 123 -71 236 -139 251 -151
                                    31 -27 44 -72 30 -109 -12 -30 -64 -59 -96 -51 -13 4 -87 43 -166 89 -79 46
                                    -150 86 -160 89 -26 10 -52 -15 -44 -43 4 -18 43 -45 157 -109 83 -47 159 -96
                                    170 -109 27 -34 25 -86 -6 -116 -44 -44 -78 -35 -252 66 -168 97 -198 105
                                    -198 54 0 -27 8 -35 100 -87 114 -65 141 -88 147 -122 6 -32 -15 -82 -41 -95
                                    -37 -20 -75 -11 -156 35 -144 83 -146 84 -167 73 -10 -5 -18 -21 -18 -34 0
                                    -19 10 -30 41 -46 106 -53 122 -148 32 -185 -33 -14 -38 -14 -97 14 l-62 29 4
                                    65 c5 77 -10 113 -65 155 -30 23 -46 28 -95 28 -57 0 -59 1 -67 32 -21 74 -83
                                    123 -155 123 -33 0 -36 2 -36 30 0 58 -67 150 -109 150 -8 0 -9 9 -4 28 44
                                    157 -104 274 -251 196 l-48 -26 33 59 c176 310 226 392 236 393 7 0 24 -5 38
                                    -12 18 -8 24 -16 18 -27 -4 -9 -9 -41 -11 -71 -3 -45 1 -61 20 -90 37 -54 82
                                    -80 143 -80 46 0 66 8 191 80 76 44 145 80 152 80 8 0 41 -16 73 -35 33 -19
                                    68 -35 78 -35 27 0 47 28 35 48 -16 26 -155 102 -187 102 -17 0 -85 -33 -170
                                    -82 -160 -92 -190 -99 -234 -55 -32 32 -36 86 -9 116 16 18 284 178 326 194 8
                                    4 38 5 67 3 42 -2 72 -14 165 -68z m-791 -548 c6 0 21 -12 34 -26 29 -31 33
                                    -78 10 -111 -23 -33 -157 -103 -197 -103 -59 0 -101 65 -78 121 18 41 175 135
                                    208 124 8 -3 18 -5 23 -5z m134 -265 c38 -37 35 -95 -7 -130 -79 -67 -144 -79
                                    -188 -35 -49 49 -32 107 45 157 63 42 115 44 150 8z m164 -166 c31 -11 61 -52
                                    61 -83 0 -34 -27 -68 -75 -96 -81 -47 -134 -38 -161 27 -22 52 3 97 76 134 63
                                    33 58 32 99 18z m254 -169 c55 -43 42 -117 -28 -157 -55 -31 -90 -29 -126 6
                                    -48 49 -35 110 35 152 40 25 87 24 119 -1z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h6 class="title"> Trusted  <br />
                                                Customers
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="feature-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                    <div class="inner-box">
                                        <div class="content">
                                            <div class="icon">
                                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
                                                    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#4C367E" stroke="none">
                                                        <path d="M543 1265 c-114 -31 -210 -119 -253 -232 -18 -48 -22 -81 -24 -185
                                    -1 -117 1 -128 21 -150 12 -12 25 -36 29 -53 9 -41 31 -63 68 -71 21 -4 39
                                    -18 55 -42 l23 -37 -23 -44 c-22 -40 -30 -46 -99 -70 -96 -33 -141 -62 -185
                                    -115 -51 -63 -78 -131 -79 -201 l-1 -60 565 0 565 0 -1 60 c-1 70 -28 138 -79
                                    201 -44 53 -89 81 -185 115 -67 24 -77 31 -99 69 -19 34 -22 46 -12 59 23 32
                                    61 116 61 137 0 17 8 22 41 27 23 3 51 15 63 27 19 19 21 31 20 148 -1 103 -6
                                    137 -23 184 -44 114 -141 203 -257 233 -71 18 -122 18 -191 0z m242 -74 c76
                                    -38 127 -93 155 -168 27 -73 26 -93 -5 -93 -21 0 -25 5 -25 28 -1 38 -36 111
                                    -73 150 -17 17 -55 41 -84 52 -106 39 -244 16 -310 -52 -37 -39 -72 -112 -73
                                    -150 0 -23 -4 -28 -25 -28 -31 0 -32 20 -6 90 69 181 270 258 446 171z m-47
                                    -76 c71 -30 122 -102 122 -171 l0 -37 -42 7 c-56 9 -133 45 -183 86 -35 28
                                    -45 31 -80 26 -22 -4 -61 -20 -87 -36 -53 -32 -57 -28 -28 30 22 43 73 87 117
                                    100 46 14 141 11 181 -5z m-124 -162 c45 -38 140 -80 198 -88 l50 -7 -7 -82
                                    c-10 -122 -24 -173 -59 -219 -40 -54 -96 -81 -161 -81 -58 1 -98 19 -139 63
                                    -29 30 -29 31 -7 31 13 0 37 -12 54 -26 27 -22 38 -25 79 -22 60 6 88 30 88
                                    75 0 51 -29 73 -95 73 -47 0 -60 -4 -80 -26 -18 -19 -31 -25 -57 -22 -33 3
                                    -33 3 -45 78 -19 123 -17 166 13 205 24 32 94 75 123 75 7 0 27 -12 45 -27z
                                    m-244 -122 c0 -27 3 -63 6 -81 7 -30 6 -31 -22 -28 -29 3 -29 3 -32 81 -3 77
                                    -3 77 23 77 23 0 25 -3 25 -49z m588 -28 c-3 -78 -3 -78 -32 -81 -28 -3 -29
                                    -2 -22 28 3 18 6 54 6 81 0 46 2 49 25 49 26 0 26 0 23 -77z m-568 -159 c0
                                    -14 -4 -23 -10 -19 -5 3 -10 15 -10 26 0 10 5 19 10 19 6 0 10 -12 10 -26z
                                    m268 -46 c-3 -20 -9 -23 -43 -23 -34 0 -40 3 -43 23 -3 20 1 22 43 22 42 0 46
                                    -2 43 -22z m142 -187 c10 -26 8 -37 -16 -91 l-27 -61 -44 43 -43 42 52 53 c28
                                    28 55 50 58 48 4 -3 13 -18 20 -34z m-245 -21 l49 -50 -40 -41 -41 -40 -27 61
                                    c-24 54 -26 65 -16 91 7 16 15 29 19 29 4 0 29 -23 56 -50z m113 25 c1 -1 -6
                                    -9 -16 -18 -17 -16 -20 -15 -42 8 l-23 24 39 -6 c22 -3 40 -7 42 -8z m-218
                                    -121 c17 -36 55 -104 85 -150 30 -47 55 -87 55 -89 0 -3 -106 -5 -236 -5
                                    l-237 0 7 41 c12 77 67 159 133 200 28 17 139 65 161 68 2 1 16 -29 32 -65z
                                    m566 1 c71 -42 127 -123 140 -204 l7 -41 -237 0 c-130 0 -236 2 -236 5 0 2 25
                                    42 55 89 30 46 68 113 84 150 l30 65 57 -19 c32 -11 76 -31 100 -45z m-327
                                    -39 l43 -44 -44 -66 c-23 -36 -45 -66 -48 -66 -3 0 -25 30 -48 66 l-44 66 43
                                    44 c24 24 46 44 49 44 3 0 25 -20 49 -44z"></path>
                                                        <path d="M894 275 c-4 -9 -2 -21 4 -27 15 -15 44 -1 40 19 -4 23 -36 29 -44 8z"></path>
                                                        <path d="M984 225 c-7 -18 66 -106 86 -103 27 6 21 33 -15 76 -38 43 -62 53
                                    -71 27z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <h6 class="title"> Support  <br />
                                                Team
                                            </h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section> */}

                    {/* <p class="text-center mt-3 mb-5">Top rated by customers &amp; immigration firms with 100% success rate.</p> */}

                    {/* <section class="why-choose pb-3">
                        <div class="container">
                            <h5 class="text-center fw-bold title-number p-5">The Numbers Say it All</h5>
                            <ul class="our-strength row d-flex flex-wrap mb-4 p-0">
                                <li class="col-lg-3 col-md-6 col-12">
                                    <div class="icon"><img src="https://test.com/images/themes/logos/thenum-certified.png" alt="" /></div>
                                    <span class="counter">20</span><span>+</span>
                                    <div class="title">Certified Courses</div>
                                </li>
                                <li class="col-lg-3 col-md-6 col-12 mt-sm-3">
                                    <div class="icon"><img src="https://test.com/images/themes/logos/the number.-students.png" alt="" /></div>
                                    <span class="counter">999</span><span>+</span>
                                    <div class="title">Students Enrolled </div>
                                </li>
                                <li class="col-lg-3 col-md-6 col-12 mt-sm-3">
                                    <div class="icon"><img class="mt-md-3 " src="https://test.com/images/themes/logos/the numberpassing.png" alt="" /></div>
                                    <div class="couter-outer"><span class="counter">90</span><span>%+</span></div>
                                    <div class="title">Passing to Universities</div>
                                </li>
                                <li class="col-lg-3 col-md-6 col-12 mt-sm-3">
                                    <div class="icon"><img class="mt-md-3" src="https://test.com/images/themes/logos/the number.-satified.png" alt="" /></div>
                                    <div class="couter-outer"><span class="counter">100</span><span>%</span></div>
                                    <div class="title">Satisfied Parents</div>
                                </li>
                            </ul>
                        </div>
                    </section> */}

                    {/* <section class="campus_section mt-5">
                        <div class="container-fluid">
                            <div class="px-5">
                                <h5 class="why-choose-us ">Top universities</h5>
                                <h1 class="fw-bold">Top Universities
                                    <br />That <span class=" company-text">We Collaborated</span>
                                </h1>
                                <div class="text-underline-purple">
                                </div>
                            </div>

                            <div class="campus-tour padding-lg">
                                <ul class="gallery clearfix mt-5">
                                    <li class="col-lg-2">
                                        <div class="overlay">
                                            <h3>sample uni</h3>
                                            <a class="galleryItem" data-bs-toggle="modal" data-bs-target="#zoom0">
                                                <iconify-icon
                                                    icon="material-symbols:zoom-out-map-rounded"></iconify-icon>
                                            </a>
                                        </div>
                                        <figure><img class="img-fluid" src="https://test.com/storage/universities/image-64e0bb611825b8.89618385.png" class="img-responsive" alt="" /></figure>
                                    </li>
                                    <div class="modal fade" id="zoom0" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <img class="w-100 image-fluid" src="https://test.com/storage/universities/image-64e0bb611825b8.89618385.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </ul>
                            </div>
                        </div>
                    </section> */}

                    {/* <section class="testimonial-section" className="testmonials">

                        <div class="ms-3 ms-lg-5 ps-lg-5 mb-4 position-relative">
                            <h5 class="text-white mt-4">Testimonials</h5>
                            <h1 class=" text-white fw-bold">What they’re talking
                                <br />about <span class=" sub-title-orange">Square one overseas</span>
                            </h1>
                            <div class="text-underline-orange mt-3 mb-5"></div>

                            <div class="container carousel-outer">
                                <div class="owl-carousel owl-theme testimonial-carousel owl-loaded owl-drag">






                                    <div class="owl-stage-outer"><div class="owl-stage" ><div class="owl-item cloned"><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        My counsellor vamsi has helped me shortlist University that are suited for my profile. He had followed up from start to end my app...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`My counsellor vamsi has helped me shortlist University that are suited for my profile. He had followed up from start to end my applications and was great supportive. My counsellor has supported me through all of my visa process and made me confident by taking mocks. Thanks for all the support squareone overseas provided me.`, 'Maya')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Maya</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        My experience with Squareone overseas was excellent they helped me to get all the things done for my aboard study. Starting from u...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`My experience with Squareone overseas was excellent they helped me to get all the things done for my aboard study. Starting from university selection, application, IELTS, financial support and visa.

I’m truly thankful for Manika madam for being patient in helping me in test prep for IELTS and clearing all my queries and concerns and demonstrating your genuine commitment for my success.`, 'Divya')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Divya</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        I had a remarkable experience with squareone overseas. the entire team ensured a smooth visa application. Their teamwork and profe...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`I had a remarkable experience with squareone overseas. the entire team ensured a smooth visa application. Their teamwork and professionalism were outstanding, and I confidently rate them 5 stars`, 'Aarav')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Aarav</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        Hi ma’am. You teach really well and also solve all my doubts. All the topics are also covered in the class. All I have to do is pr...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`Hi ma’am. You teach really well and also solve all my doubts. All the topics are also covered in the class. All I have to do is practice a little more. Class is really good and I will definitely suggest squareone overseas to friends and family`, 'Ayan')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Ayan</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item active" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        I have done my IELTS course from squareone overseas and I am happy to share that I have cleared the exam with just 15 days of coac...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`I have done my IELTS course from squareone overseas and I am happy to share that I have cleared the exam with just 15 days of coaching. The trainers are nice and the environment is healthy. So, if you are searching for an institute for IELTS Coaching, Squareone Overseas should be your first choice.`, 'Jaskaran')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Jaskaran</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item active" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        Earlier I found it tough to think of the right English words that would fully convey my message. After spending a month at squareo...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`Earlier I found it tough to think of the right English words that would fully convey my message. After spending a month at squareone overseas IELTS coaching, I have got rid of that issue thanks to the trained instructors.`, 'Krishnan')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Krishnan</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item active" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        My counsellor vamsi has helped me shortlist University that are suited for my profile. He had followed up from start to end my app...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`My counsellor vamsi has helped me shortlist University that are suited for my profile. He had followed up from start to end my applications and was great supportive. My counsellor has supported me through all of my visa process and made me confident by taking mocks. Thanks for all the support squareone overseas provided me.`, 'Maya')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Maya</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item active" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        My experience with Squareone overseas was excellent they helped me to get all the things done for my aboard study. Starting from u...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`My experience with Squareone overseas was excellent they helped me to get all the things done for my aboard study. Starting from university selection, application, IELTS, financial support and visa.

I’m truly thankful for Manika madam for being patient in helping me in test prep for IELTS and clearing all my queries and concerns and demonstrating your genuine commitment for my success.`, 'Divya')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Divya</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        I had a remarkable experience with squareone overseas. the entire team ensured a smooth visa application. Their teamwork and profe...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`I had a remarkable experience with squareone overseas. the entire team ensured a smooth visa application. Their teamwork and professionalism were outstanding, and I confidently rate them 5 stars`, 'Aarav')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Aarav</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        Hi ma’am. You teach really well and also solve all my doubts. All the topics are also covered in the class. All I have to do is pr...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`Hi ma’am. You teach really well and also solve all my doubts. All the topics are also covered in the class. All I have to do is practice a little more. Class is really good and I will definitely suggest squareone overseas to friends and family`, 'Ayan')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Ayan</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        I have done my IELTS course from squareone overseas and I am happy to share that I have cleared the exam with just 15 days of coac...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`I have done my IELTS course from squareone overseas and I am happy to share that I have cleared the exam with just 15 days of coaching. The trainers are nice and the environment is healthy. So, if you are searching for an institute for IELTS Coaching, Squareone Overseas should be your first choice.`, 'Jaskaran')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Jaskaran</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        Earlier I found it tough to think of the right English words that would fully convey my message. After spending a month at squareo...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`Earlier I found it tough to think of the right English words that would fully convey my message. After spending a month at squareone overseas IELTS coaching, I have got rid of that issue thanks to the trained instructors.`, 'Krishnan')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Krishnan</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        My counsellor vamsi has helped me shortlist University that are suited for my profile. He had followed up from start to end my app...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`My counsellor vamsi has helped me shortlist University that are suited for my profile. He had followed up from start to end my applications and was great supportive. My counsellor has supported me through all of my visa process and made me confident by taking mocks. Thanks for all the support squareone overseas provided me.`, 'Maya')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Maya</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div><div class="owl-item cloned" ><div class="testimonial-block item col-12 px-2">
                                        <div class="inner-box">
                                            <div class="content-box">
                                                <iconify-icon class="icon" icon="bxs:quote-alt-left"></iconify-icon>
                                                <div class="rating fw-bold"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>&nbsp; <i class="fs-5 testimonial-rate ">4.5</i>
                                                </div>

                                                <div class="text-container">
                                                    <div class="text ">
                                                        My experience with Squareone overseas was excellent they helped me to get all the things done for my aboard study. Starting from u...
                                                    </div>
                                                    <button id="show-more-button" data-bs-toggle="modal" onclick="displayTestimonialContent(`My experience with Squareone overseas was excellent they helped me to get all the things done for my aboard study. Starting from university selection, application, IELTS, financial support and visa.

I’m truly thankful for Manika madam for being patient in helping me in test prep for IELTS and clearing all my queries and concerns and demonstrating your genuine commitment for my success.`, 'Divya')" data-bs-target="#testimonialContentModal">Show More
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="info-box">
                                                <h6 class="name">Divya</h6>
                                                <span class="designation">Customer</span>
                                            </div>
                                        </div>
                                    </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button></div></div>
                            </div>

                            <div class="modal modal-dialog-scrollable " id="testimonialContentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalHeader"></h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" id="testimonialContentModalBody">
                                            Hi ma’am. You teach really well and also solve all my doubts. All the topics are also covered in the class. All I have to do is practice a little more. Class is really good and I will definitely suggest squareone overseas to friends and family
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* <section class="Success stories mt-5">
                        <div class="container ">
                            <h5 class="why-choose-us ">Success stories</h5>
                            <h1 class="fw-bold">Hear inspirational
                                <br /> <span class=" company-text">       Stories</span>
                            </h1>
                            <div class="text-underline-purple"></div>
                            <div class="row mt-5 ">

                                <div class="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <figure class="image"><a href=""><img src="https://test.com/storage/stories/image-650ee924efe569.94938234.jpg" alt="" /></a></figure>
                                        </div>
                                        <div class="info-box">
                                            <h5><a href="https://test.com/blogs/divya " class="text-decoration-none text-black">
                                                Divya
                                            </a></h5>
                                            <h6 class="name">
                                                <p>It was an experience unlike any other that not...
                                                </p></h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <figure class="image"><a href=""><img src="https://test.com/storage/stories/image-650ef1c67c3c86.78312114.jpg" alt="" /></a></figure>
                                        </div>
                                        <div class="info-box">
                                            <h5><a href="https://test.com/blogs/arjun " class="text-decoration-none text-black">
                                                Arjun
                                            </a></h5>
                                            <h6 class="name">
                                                <p>My experience was nothing short of magical!</p>...
                                            </h6>
                                        </div>
                                    </div>
                                </div>

                                <div class="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                    <div class="inner-box">
                                        <div class="image-box">
                                            <figure class="image"><a href=""><img src="https://test.com/storage/stories/image-650ef1d6b2bf90.04638531.jpg" alt="" /></a></figure>
                                        </div>
                                        <div class="info-box">
                                            <h5><a href="https://test.com/blogs/rakesh " class="text-decoration-none text-black">
                                                Rakesh
                                            </a></h5>
                                            <h6 class="name">
                                                <p>I took the IELTS Academic last year, It was alw...
                                                </p></h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-end mx-2 ">
                                    <a href="https://test.com/blogs">
                                        <button class="view-more-btn text-light rounded-5 mt-1 px-sm-0 px-lg-3">View more</button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section class="register_page">
                        <div class="container">
                            <div class="row pt-5">
                                <div class="col-lg-4">
                                    <div class="">
                                        <h5 class="why-choose-us">Register Form</h5>
                                        <h1 class="fw-bold">Get in touch
                                            <br /> with <span class=" company-text">Us</span>
                                        </h1>
                                        <div class="text-underline-purple"></div>
                                    </div>

                                </div>
                                <div class="col-lg-8">
                                    <form class="form-input-bg" id="inquiryForm">
                                        <div class="row mb-3">
                                            <div class="col-lg-6 col-sm-6">
                                                <label for="firstName" class="form-label fw-bold">First Name</label>
                                                <input type="text" class="form-control" id="firstName" placeholder="Enter First Name" />
                                                <span class="error-log error-firstName text-danger"></span>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <label for="lastName" class="form-label fw-bold">Last Name</label>
                                                <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name" />
                                                <span class="error-log error-lastName text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-lg-6 col-sm-6">
                                                <label for="email" class="form-label fw-bold">Email address</label>
                                                <input type="email" class="form-control" id="email" placeholder="Enter Email" />
                                                <span class="error-log error-email text-danger"></span>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <label for="phoneNumber" class="form-label fw-bold">Phone Number</label>
                                                <input type="tel" class="form-control" id="phone" placeholder="Enter Phone Number" />
                                                <span class="error-log error-phone text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-lg-6 col-sm-6">
                                                <label for="country" class="form-label fw-bold">Country</label>
                                                <input type="text" class="form-control" id="country" placeholder="Enter Country" />
                                                <span class="error-log error-country text-danger"></span>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <label for="state" class="form-label fw-bold">State</label>
                                                <input type="text" class="form-control" id="state" placeholder="Enter State" />
                                                <span class="error-log error-state text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-lg-6 col-sm-6">
                                                <label for="city" class="form-label fw-bold">City</label>
                                                <input type="text" class="form-control" id="city" placeholder="Enter City" />
                                                <span class="error-log error-city text-danger"></span>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <label for="branch" class="form-label fw-bold">Nearest branch</label>
                                                <input type="text" class="form-control" id="branch" placeholder="Enter Nearest branch" />
                                                <span class="error-log error-branch text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6 col-sm-6 mt-2">
                                                <label for="destination" class="form-label fw-bold">Your preferred study destination</label>
                                                <input type="text" class="form-control" id="destination" placeholder="Enter preferred destination" />
                                                <span class="error-log error-destination text-danger"></span>
                                            </div>
                                        </div>

                                        <div class="response-msg-contact mt-4"></div>

                                        <div class=" mt-5 mb-5 col-lg-4 col-md-5 col-12 ">
                                            <button class="get-assistance-btn px-3 text-white" type="button" onclick="inquiry()">Help me study abroad</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
 */}


                </div>
            </div>

        </div>
    </div>);
}
export default Home;