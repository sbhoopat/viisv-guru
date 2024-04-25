import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const ContactUs = () => {

    return (
        <div class="container-fluid pt-5ren mb-20 mt-5">
            <div class=" p-0 m-0" className="contact-us">
                <div class="container pt-5">
                    <h5 class="text-white fw-bold ms-lg-5 ms-3 mt-5 pt-5 our-txt">Contact Us</h5>
                    {/* <h1 class="text-white fw-bold ms-lg-5 ms-3">Empowering minds and transforming lives</h1> */}
                    <div class="ms-lg-5 ms-3">
                        <div class="text-underline-orange">
                        </div>
                        <div class="container mt-5 " id="serviceCardSection">
                            <div class="service-main">
                                <div className='guru-txt'>
                                    <div class="line"></div>
                                    <div class="paragraph">
                                        <div class="mail-add text-white">
                                            <a class="nav-link ps-3" href="mailto:viisveducation@gmail.com"><EmailTwoToneIcon color='white'></EmailTwoToneIcon>viisveducation@gmail.com</a>
                                        </div>
                                        <div class="mobile  ps-3 text-white">
                                            <a class="nav-link" href="tel:+91 9600136010"><PhoneIcon></PhoneIcon>
                                                +91 9600136010</a>
                                        </div>
                                        <div class="right-side d-flex">
                            <div class="help d-flex pe-3 align-items-center">
                            </div>
                            <div class="social">
                                <ul class="d-flex px-0 text-white social-links">
                                    <a class="nav-link" href="https://www.facebook.com/test" target="_blank"><FacebookRoundedIcon></FacebookRoundedIcon></a>
                                    <a class="nav-link" href="https://www.instagram.com/test/" target="_blank"><InstagramIcon></InstagramIcon></a>
                                    <a class="nav-link" href="https://wa.me/917331110062?text=I'm%20planning%20to%20study%20abroad,%20can%20you%20help%20me?" target="_blank"><WhatsAppIcon></WhatsAppIcon></a>
                                </ul>
                            </div>

                        </div>
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
        </div>
    )

}

export default ContactUs;