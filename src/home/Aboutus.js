const AboutUs = () => {

    return (
        <div class="container-fluid pt-5ren mb-20 mt-5">
            <div class=" p-0 m-0" className="about-us">
                <div class="container pt-5">
                    <h5 class="text-white fw-bold ms-lg-5 ms-3 mt-5 pt-5 our-txt">About VIISV</h5>
                    {/* <h1 class="text-white fw-bold ms-lg-5 ms-3">Empowering minds and transforming lives</h1> */}
                    <div class="ms-lg-5 ms-3">
                        <div class="text-underline-orange">
                        </div>
                        <div class="container mt-5 " id="serviceCardSection">
                            <div class="service-main">
                                <div className='guru-txt'>
                                    <div class="line"></div>
                                    <div class="paragraph">
                                        <p>VIISV provides a comprehensive range of educational services, from Study Abroad to Specialized
                                            courses in Technology, Language, and Career development through personalized mentor program
                                            called "VIISV GURU"
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
        </div>
    )

}

export default AboutUs;