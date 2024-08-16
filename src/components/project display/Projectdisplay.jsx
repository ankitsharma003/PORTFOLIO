import React,{useState} from "react";
import "./Projectdisplay.css";
import send_icon from "../../assets/send.png";
const Projectdisplay = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="projectdisplay">
      <div className="projectdisplay-header">
        <a target="/" href={props.link}>
          <h3>{props.name}</h3>
          <img src={send_icon} width={"30px"} alt="" />
        </a>
        <p className="projectDescription">
          {isReadMore ? props.description.slice(0, 100) : props.description}
          {props.description.length > 100 && (
            <span onClick={toggleReadMore} className="read-more-link">
              {isReadMore ? "...Read More" : "...Read Less"}
            </span>
          )}
        </p>
        <div className="projectdisplay-btn">
          <a href={props.gitlink} rel="noopener noreferrer" target="_blank">
            <button href={props.gitlink}>View Code</button>
          </a>
          <a href={props.link} rel="noopener noreferrer" target="_blank">
            <button href={props.link}>View Website</button>
          </a>
        </div>
      </div>
      <div className="project-images-container">
        <div className="project-images-column">
          <div className="image">
            <img src={props.image} alt="" />
          </div>
          <div className="image">
          {props.img2? <img src={props.img1} alt="" />:""}
          </div>
          <div className="image">
            {props.img2? <img src={props.img2} alt="" />:""}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Projectdisplay;
