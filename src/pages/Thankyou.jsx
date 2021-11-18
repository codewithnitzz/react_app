import React from 'react'
import '../components/css/wizard.css'

const Thankyou = () => {
    return (
        <div>
            <div className="wizardFormBox tyWizardBox">
                <div className="thankyouBox" id="thankYouBox">
                        <section className="d-flex flex-column align-items-center justify-content-center mt-1 sucessBox"  id="successBox">
                            <div class="success-animation">
                                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                            </div>
                            <h2 className="text-center text-sm-center text-md-center text-lg-center"> Thank You ! </h2>
                            <p className="text-justify">Your submission has been received!</p>
                        </section>
                </div>
            </div>    
        </div>
    )
}

export default Thankyou
