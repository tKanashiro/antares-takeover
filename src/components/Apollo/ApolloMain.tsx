import "./ApolloMain.css";
import requestImg from "./images/request.png";
import responseImg from "./images/response.png";
import splitImg from "./images/split.png";

const ApolloMain = () => {
    return (
        <div className="body">
            <img src={requestImg.src} alt="request" />
            <img src={responseImg.src} alt="response" />
            <img className="splitResponseImg" src={splitImg.src} alt="split" />
            <a className="demoLink" href="/apollo-cache">
                Demo
            </a>
        </div>
    );
};

export default ApolloMain;
