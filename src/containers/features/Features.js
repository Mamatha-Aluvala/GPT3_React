import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus neque expedita sequi quis praesentium inventore perspiciatis porro nulla distinctio quae.",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus neque expedita sequi quis praesentium inventore perspiciatis porro nulla distinctio quae.",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus neque expedita sequi quis praesentium inventore perspiciatis porro nulla distinctio quae.",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus neque expedita sequi quis praesentium inventore perspiciatis porro nulla distinctio quae.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize it. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => {
          return (
            <Feature
              key={item.title + index}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
