import React from "react";
import "./About.css";
import CutePic from "../../assets/Yearbook Style Photo.png";

function AboutItem(props) {
  return (
    <div
      onClick={() => {
        props.setActiveTitle("Outside of academics, I enjoy playing poker as well as competitive chess.");
      }}

    className="timeline-item">
      <h1>{props.title}</h1>
    </div>
  );
}

export default function AboutScreen() {

  const [activeTitle, setActiveTitle] = React.useState('BLANK');
  return (
    <div className="screen-background">
          <div className="intro-background">

            <div className = "intro-item">
              <img src={CutePic} className="intro-picture"/>
            </div>
            <div className = "intro-item">
              My name is Nithin and I'm originally from Boston. I live in Canaday. I am interested in studying math, computer science, and statistics.
            </div>

            <div className="intro-background">
               <AboutItem title = "More info"
               setActiveTitle={setActiveTitle}
               ></AboutItem>
            </div>
                        
            <div className="highlight-background">
              <h1>{activeTitle}</h1>
            </div>
          </div>
        </div>
  );
}
