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
            <p>
                For any questions or concerns or if you would like to put in your order,
                you can use the message box next to this or call/text 831-809-9374
                Please Include 
                <ul>
                    <li>
                    Name of the items
                    </li>
                    <li>
                    Your contact information.
                    </li>
                    <li>
                    Delivery included with most orders.
                    </li>
                </ul>
            </p>
              

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
