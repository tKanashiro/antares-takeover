import "./Request.css";
import requestImg from "./images/request.png";
import responseImg from "./images/response.png";

const Request = () => {
    return (
        <div className="body">
            <img src={requestImg.src} alt="request" />
            <img src={responseImg.src} alt="response" />
        </div>
    );
};

export default Request;
