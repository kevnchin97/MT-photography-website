import { FaInstagram, FaEnvelope } from "react-icons/fa";
import "./App.css";
const Pricing = () => {
    return (
        <div className="plans wrapper animate__animated animate__fadeInDown">
            <h2>event coverage</h2>
            <h2>backstage</h2>
            <h2>artist portraits</h2>
            <h2>album covers</h2>
            <div className="icons">
                <a href="https://www.instagram.com/midnite.tones/"><FaInstagram /></a><a href="mailto:midnite.tones@outlook.com"><FaEnvelope /></a>
            </div>
            <p> Kevin works with clients to understand their vision and provide a personalized service that captures the essence of the event and the performers. His rates are competitive, and he offer flexible packages that can be customized to suit your specific requirements. Whether you are a promoter, artist, or festival organizer, he is committed to providing a high-quality service that exceeds your expectations. Contact him today to discuss your project and learn how he can help you capture the unforgettable moments of your event.</p>
            
            <div className="finePrint">
                <p> *Additional fees may apply </p>
                <p> *50% deposit is required</p>
                <p> *No refunds for cancellations</p>
            </div>
        </div>
    )
}
export default Pricing;