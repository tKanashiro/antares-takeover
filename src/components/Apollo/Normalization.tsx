import "./Normalization.css";
import splitImg from "./images/split.png";

const Normalization = () => {
    return (
        <div className="body">
            <img src={splitImg.src} alt="split" />
            <a className="demoLink" href="/apollo-cache">
                Demo
            </a>
        </div>
    );
};

export default Normalization;
