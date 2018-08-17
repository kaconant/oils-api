import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

class FAQ extends React.Component {

  render() {

    return (
      <div>
        <Navbar/>
        <div className="faq" id="faq" >
          {/* Why did you start myBlendology?  */}
          {/* Frankly, we love essential oils and believe that everyone should have the ability to create basic blends without having to memorize all of the knowledge behind each oils. We hope this application can help beginners figure out what works for them and get creative!  */}

          {/* What makes up an essential oil blend?  */}
          {/* We believe in the idea that any blend is comprised of a top, middle, and base note oil that will help balance the oil. While this is by no means the only way to create an essential oil blend, we believe that this simple method will allow beginners to experiment with their own blend creations. */}

          {/* Will your blends cure X, Y, and Z?  */}
          {/* myBlendology is not offering any medical advice and only offering suggestions for oil blends that users can enjoy in their own time. we recommend that any user confirms the use of any of these oils with a doctor if they are concerned with allergies, etc. */}

          {/* Will you be adding X,Y, or Z functionality to myBlendology? */}
          {/* While this is currently the first version of myBlendology, we have big plans in the future. Keep an eye out to see our future versions soon!  */}

          {/* I have a cool idea for myBlendology! How do I contact you?  */}
          {/* Feel free to reach out to our email at hello@myblendology.com or check out our instagram page today.  */}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default FAQ;
