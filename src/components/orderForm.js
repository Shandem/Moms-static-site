import React from 'react';
import emailjs from 'emailjs-com'
import './orderForm.scss'

const orderForm = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_mom', 'template_s37ckcl', e.target, 'user_q6niYF7zAICl2UryWz6tm')
          .then((result) => {
              console.log(result.text);
              refreshPage();
          });
        
         
      }
      function refreshPage() {
		window.location.reload(false);
	}

      return (
          <div className="orderForm">
                <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Message to Gaby</label>
                <textarea name="message" />
                <input className='submit' type="submit" value="Send" />
                </form>
        </div>
      );
}

export default orderForm;
