'use client'

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const LaunchSoonSubscribe: React.FC = () => {
    const [state, handleSubmit] = useForm("moqgkrbz");
    const [showConfirmation, setShowConfirmation] = useState(false); 

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        await handleSubmit(e); 

        if (state.succeeded) {
            setShowConfirmation(true); 
            setTimeout(() => setShowConfirmation(false), 5000); 
        }
    };

    return (
        <div className="launch-soon-subscribe-area">
            {!showConfirmation && ( 
                <form 
                    className="subscribe-form" 
                    onSubmit={handleFormSubmit}
                    action="https://formspree.io/f/moqgkrbz"
                    method="POST"
                >
                    <label htmlFor="email">Enter your email:</label>
                    <div className="subscribe-form-input">
                        <input type="email" id="email" name="email" className="form-control" placeholder="your@email.com" />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <button type="submit" className="btn-primary" disabled={state.submitting}>Get Started</button>
                    </div>
                </form>
            )}

            {showConfirmation && ( 
                <p className='succeeded'>Your email has been submitted. You will get a response within 24 hours. Thank you! </p>
            )}
        </div>
    );
}

export default LaunchSoonSubscribe;
