'use client'

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FallingLines } from 'react-loader-spinner';

const LaunchSoonSubscribe: React.FC = () => {
    const [state, handleSubmit] = useForm("xjvnadyq");
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

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
            <form
                className="subscribe-form"
                onSubmit={handleFormSubmit}
                action="https://formspree.io/f/xjvnadyq"
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
                    <button type="submit" className="btn-primary" disabled={state.submitting}>Get Started</button>
                </div>
            </form>
        </div>
    );
}

export default LaunchSoonSubscribe;


