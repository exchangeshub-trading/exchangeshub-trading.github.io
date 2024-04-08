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

    useEffect(() => {
        setShowCaptcha(false);
        setShowGetStartedButton(true);
    }, []);

    useEffect(() => {
        setShowCaptcha(false);
        setShowGetStartedButton(true);
    }, [submitSuccess]);

    const onChange = (value: string | null) => {
        setCaptchaValue(value);
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setLoading(true);

        await handleSubmit(event);

        setLoading(false);
        setSubmitSuccess(true);

        setTimeout(() => {
            setSubmitSuccess(false);
        }, 3000);
    };

    const handleGetStartedClick = () => {
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
            {!loading && !submitSuccess && (
                <form
                    className="subscribe-form"
                    onSubmit={handleFormSubmit}
                    action="https://formspree.io/f/moqgkrbz"
                    method="POST"
                >
                    <label htmlFor="email">Enter your email:</label>
                    <div className="subscribe-form-input">
                        <input type="email" id="email" name="email" className="form-control" placeholder="your@email.com"/>
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
                            <button type="button" className="btn-primary" disabled={state.submitting} onClick={handleGetStartedClick}>Get Started</button>
                        )}
                        {showCaptcha && (
                            <button type="submit" className="btn-primary" disabled={!captchaValue || state.submitting}>Get Started</button>
                        )}
                    </div>
                </form>
            )}
        </div>
    );
}

export default LaunchSoonSubscribe;
