import React, {Component, useState, useEffect} from "react";
import Header from "../components/header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";



//NEW CODE

//[isDark, setIsDark] = useState(false);

// useEffect= ()=>{

//   if (localStorage.getItem("isDark") === null) {
//     const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
//     localStorage.setItem("isDark", darkPref.matches);
//   }

//   setIsDark({isDark: JSON.parse(localStorage.getItem("isDark"))});


// changeTheme = () => {
//   setIsDark({isDark: !this.state.isDark}, () => {
//     localStorage.setItem("isDark", isDark);
//   });}
  
//   , []

// }

// const Main = () => {
//   return (
//     <>
      
//     </>
//   )
// }

// export default Main







export default class Main_Old extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }
  changeTheme = () => {
    this.setState({isDark: !this.state.isDark}, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}
        >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Profile />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
