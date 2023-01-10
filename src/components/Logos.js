import react from "../assets/img/icontech/react.svg";
import node from "../assets/img/icontech/node.svg";
import vsCode from "../assets/img/icontech/vsCode.svg";
import mui from "../assets/img/icontech/mui.svg";
import androidStudio from "../assets/img/icontech/androidStudio.svg";
import express from "../assets/img/icontech/express.svg";
import css from "../assets/img/icontech/css.svg";
import gitHub from "../assets/img/icontech/gitHub.svg";
import js from "../assets/img/icontech/js.svg";
import HTML from "../assets/img/icontech/HTML.svg";
import mongodb from "../assets/img/icontech/mongo.svg";
import northflank from "../assets/img/icontech/northflank.png";
import expo from "../assets/img/icontech/expo.png";
import xCode from "../assets/img/icontech/xCode.png";

const Logos = () => {
  return (
    <>
      <section className="logo-container">
        <div className="logo">
          <img src={HTML} alt="logo" />
          <caption>HTML 5</caption>
        </div>
        <div className="logo">
          <img src={css} alt="logo " />
          <caption>CSS 3</caption>
        </div>
        <div className="logo">
          <img src={js} alt="logo " />
          <caption>JavaScript</caption>
        </div>
        <div className="logo">
          <img src={react} alt="logo " />
          <caption>React</caption>
        </div>
        <div className="logo">
          <img src={node} alt="logo " />
          <caption>Node.js</caption>
        </div>
        <div className="logo">
          <img src={mongodb} alt="logo " />
          <caption>MongoDB</caption>
        </div>
        <div className="logo">
          <img src={northflank} alt="logo " />
          <caption>Northflank</caption>
        </div>
        <div className="logo">
          <img src={express} alt="logo " />
          <caption>Express</caption>
        </div>
        <div className="logo">
          <img src={androidStudio} alt="logo " />
          <caption>Android Studio</caption>
        </div>
        <img src={xCode} alt="logo " />
        <img src={gitHub} alt="logo " />
        <img src={vsCode} alt="logo " />
        <img src={expo} alt="logo " />
        <img src={mui} alt="logo " />
      </section>
    </>
  );
};

export default Logos;
