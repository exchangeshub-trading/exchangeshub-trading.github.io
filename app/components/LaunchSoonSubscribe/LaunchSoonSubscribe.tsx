

const LaunchSoonSubscribe: React.FC = () => {
    return (
        <div className="launch-soon-subscribe-area">
            <form className="subscribe-form">
                <label htmlFor="email">Enter your email:</label>
                <div className="subscribe-form-input">
                    <input type="email" id="email" className="form-control" placeholder="your@email.com" />
                    <button type="submit" className="btn-primary">Subscribe <i className="ri-arrow-right-line"></i> </button>
                </div>
            </form>
        </div>
    )
}

export default LaunchSoonSubscribe  