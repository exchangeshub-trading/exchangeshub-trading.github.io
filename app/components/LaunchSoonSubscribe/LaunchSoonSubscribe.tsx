'use client'

import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FallingLines } from 'react-loader-spinner';
import ReCAPTCHA from "react-google-recaptcha";

const LaunchSoonSubscribe: React.FC = () => {
    const [state, handleSubmit] = useForm("moqgkrbz");
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [showGetStartedButton, setShowGetStartedButton] = useState(true);
    const recaptchaRef = useRef<any>(null);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [validForm, setValidForm] = useState(false);

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!regex.test(String(e.target.value).toLowerCase())) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    useEffect(() => {
        if (emailError || !email) {
            setValidForm(false);
            setShowGetStartedButton(true);
        } else {
            setValidForm(true);
            setShowGetStartedButton(true);
        }
    }, [emailError, email]);

    useEffect(() => {
        setShowCaptcha(false);
        setShowGetStartedButton(true);
        setSubmitSuccess(false);
        setEmail('');
        setEmailError('');
    }, [submitSuccess]);

    const onChange = (value: string | null) => {
        setCaptchaValue(value);
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        if (!email || !validForm) {
            return; 
        }
        setLoading(true);

        await handleSubmit(event);

        setLoading(false);
        setSubmitSuccess(true);

        setTimeout(() => {
            setSubmitSuccess(false);
        }, 3000);
    };

    const handleGetStartedClick = () => {
        if (!email || !validForm) {
            return; 
        }
        setShowCaptcha(true);
        setShowGetStartedButton(false);
        if (recaptchaRef.current) {
            recaptchaRef.current.execute();
        }
    };

    if (loading) {
        return (
            <div className='launch-soon-subscribe-area'>
                <div className="spinner-container">
                    <FallingLines color="#4fa94d" visible={true} />
                </div>
            </div>
        );
    }

    if (submitSuccess) {
        return (
            <div className='launch-soon-subscribe-area'>
                <p className='succeeded'>Your email has been submitted. You will get a response within 24 hours. Thank you! </p>  
            </div>
        );
    }

    return (
        <div className="launch-soon-subscribe-area">
            {!loading && !submitSuccess &&  (
                <form
                    className="subscribe-form"
                    onSubmit={handleFormSubmit}
                    action="https://formspree.io/f/moqgkrbz"
                    method="POST"
                >
                    <label 
                        htmlFor="email" 
                        style={{ color: emailError ? 'var(--red-color)' : 'inherit' }}
                        onClick={(e) => e.preventDefault()}
                    >
                        {emailError ? emailError : 'Enter your email:'}
                    </label>
                    <div className="subscribe-form-input">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="form-control" 
                            placeholder="your@email.com" 
                            onChange={e => emailHandler(e)}
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            className='recaptcha'
                            sitekey="6Le7KbApAAAAAAcvfkWREiLAB0shr6sDauHnRP0e"
                            onChange={onChange}
                            size="invisible"
                        />
                        {showGetStartedButton && (
                            <button 
                                type="button" 
                                className="btn-primary" 
                                disabled={!email || !validForm || state.submitting} 
                                onClick={handleGetStartedClick}
                                style={{
                                    opacity: (!email || !validForm || state.submitting) ? 0.5 : 1, 
                                    cursor: (!email || !validForm || state.submitting) ? 'not-allowed' : 'pointer',  
                                }}
                            >
                                Get Started
                            </button>
                        )}
                        {showCaptcha && (
                            <button 
                                type="submit" 
                                className="btn-primary" 
                                disabled={!captchaValue || state.submitting}
                            >
                                Get Started
                            </button>
                        )}
                    </div>
                </form>
            )}
        </div>
    );
}

export default LaunchSoonSubscribe;