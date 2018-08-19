import React from 'react';


class FAQ extends React.Component {

  render() {

    return (
      <div>
        <h4 className="title-text">Frequently Asked Questions</h4>
        <div className="faq" id="faq" >
          <h2 className="question" >Why did you start myBlendology?</h2>
          <h3 className="answer" >Frankly, we love essential oils and believe that everyone should have the ability to create basic blends without having to memorize all of the knowledge behind each oils. We hope this application can help beginners figure out what works for them and get creative!</h3>

          <h2 className="question">What makes up an essential oil blend?</h2>
          <h3 className="answer">We believe in the idea that any blend is comprised of a top, middle, and base note oil that will help balance the oil. While this is by no means the only way to create an essential oil blend, we believe that this simple method will allow beginners to experiment with their own blend creations.</h3>

          <h2 className="question">Will your blends cure X, Y, and Z? </h2>
          <h3 className="answer">myBlendology is not offering any medical advice and only offering suggestions for oil blends that users can enjoy in their own time. We recommend that any user confirms the use of any of these oils with a doctor if they are concerned with allergies, etc.</h3>

          <h2 className="question">Will you be adding X,Y, or Z functionality to myBlendology? </h2>
          <h3 className="answer">While this is currently the first version of myBlendology, we have big plans in the future. Keep an eye out to see our future versions soon!</h3>

          <h2 className="question">I have a cool idea for myBlendology! How do I contact you? </h2>
          <h3 className="answer">Feel free to reach out to our email at <a href="mailto:hello@myblendology.com">hello@myblendology.com</a> or check out our instagram page today. </h3>
        </div>
      </div>
    )
  }
}

export default FAQ;


// AXIOS.POST IS HOW WE MAKE REQUEST
