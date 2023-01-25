import React, {useContext} from "react";
import "./Footer.css";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  // const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text"> {emoji("Modified by James Jordan  A.K.A.  CodeWarrior-debug")} </p>
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}> {emoji("Modified by James Jordan  A.K.A.  CodeWarrior-debug")} </p>"" */}
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}> Theme by{" "} <a href="https://github.com/saadpasta/developerFolio"> developerFolio </a>{" "} | Made by Saad Pasta </p> */}
        <p className="footer-text"> Theme by{" "} <a href="https://github.com/saadpasta/developerFolio"> developerFolio </a>{" "} | Made by Saad Pasta </p>
      </div>
    </Fade>
  );
}
