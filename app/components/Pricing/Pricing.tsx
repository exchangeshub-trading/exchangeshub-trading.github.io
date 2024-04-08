import { IoCheckmark, IoCloseOutline } from 'react-icons/io5';
import list from "../../constants/pricing.constants";

const Pricing = () => {
    return (
        <div>
            <div className="pricing-title">
                <h1>Pricing</h1>
            </div>
            <div className='wrap'>
                {list.map((item, index) => (
                    <div className="pricing-box" key={index}>
                        <div className="pricing-container">
                            <div className="pricing-container-block">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="price-cta">
                                    <h2>{item.price}</h2>
                                    <a href="https://t.me/yyluchkiv" target="_blank">Talk in Telegram</a>
                                </div>
                            </div>
                            <div className="pricing-container-text">
                                <ul>
                                    {item.features.map((feature, idx) => (
                                        <li key={idx}>
                                            {feature.checkbox ? <IoCheckmark /> : <IoCloseOutline />}
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing;
