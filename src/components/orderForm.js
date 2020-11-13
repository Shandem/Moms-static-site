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
          <div className='order-container'>
          <div className="orderingInstructions">
              <h3>
                  Order Instructions
              </h3>
          </div>
            <div className="orderForm">
                
                    <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <label>Use this to send Gaby an E-mail with your question or order</label>
                    <textarea name="message" />
                    <input className='submit' type="submit" value="Send" />
                    </form>
            </div>
        </div>
      );
}

export default orderForm;
