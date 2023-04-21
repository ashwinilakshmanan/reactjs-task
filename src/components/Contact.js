import React from 'react'
import { FaComment, FaPhone} from "react-icons/fa";
function Contact() {
  return (
    <>
        <div className='cdiv-main'>
            <div className='inline-cont'>
                <div className='inline-text-cont'>
                <p>We offer all kinds of IT services that ensure your success</p>
                </div>
                <div className='inline-btn-cont'>
                <a href="https://www.tidio.com/talk/awy0oqhfhhgorwbfeet8ywkbg4off9sl" target="blank" className="inline-btn"><FaComment color='white'/> &nbsp;Let's Talk</a>
                <a href="https://woxro.com/contactus" className="inline-btn"><FaPhone color='white'/> &nbsp; Contact us</a>
                </div>
            </div>
      </div>
    </>
    
  );
}

export default Contact
