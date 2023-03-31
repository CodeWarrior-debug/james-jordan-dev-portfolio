/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "James Jordan",
  title: "James Jordan here, let's work together👨‍🔧",
  subTitle: emoji(
    "Sites 🌐 graphs 📊 servers 🖧 spreadsheets 📝 documentation ✍️ JavaScript 👨‍💻  ReactJs => I'm your guy!"
  ),
  resumeLink: "https://docs.google.com/document/d/1NvdS03IKCQ9IrqXdkVC6wcdHhJv1MOV5/edit?usp=sharing&ouid=108132765582127410218&rtpof=true&sd=true",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CodeWarrior-debug",
  linkedin: "https://www.linkedin.com/in/james-jordan-7a919b34/",
  gmail: "jpjordan1987@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What do I know?",
  skills: [
    emoji("🛡️ Front-end web development & UI"),
    emoji(
      "🛡️ Trained Full Stack: Happy to work on routing, API's, and back-end needs"
    ),
    emoji(
      "🛡️ A proven team player with project management experience & a passion for smooth user experiences"
    ),
    emoji(
      "🛡️ Be sure to check out the recommendations, endorsements, & skills sections of James's LinkedIn!!!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [{
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github-alt"
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "far fa-file-excel" 
    },
    {
      skillName: "powerpoint",
      fontAwesomeClassname: "far fa-file-powerpoint"
    },
    {
      skillName: "outlook",
      fontAwesomeClassname: "fas fa-envelope-square"
    },
    {
      skillName: "word",
      fontAwesomeClassname: "fas fa-file-word" 
    }

  ],
  display: true // Set false to hide this section, defaults to true
  //TODO: Add MS Office, VBA
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [{
      schoolName: "The University of North Carolina at Charlotte",
      logo: require("./assets/images/uncclogo.png"),
      subHeader: "Coding Certificate - Full Stack Web Development",
      duration: "February 2021 - April 2021",
      desc: "12-week bootcamp program focused on building technical programming skills in:",
      descBullets: [
        "HTML5, CSS3, Javascript, JQuery, Bootstrap",
        "NodeJS, MySQL, MongoDB, Express, and ReactJS"
      ]
    },
    {
      schoolName: "Grove City College",
      logo: require("./assets/images/gcc_circle_2.jpg"),
      subHeader: "Bachelor of Arts in Christian Theology",
      duration: "August 2005 - December 2009",
      desc: "Honors in Christian Theology. Minor in Philosophy.",
      descBullets: ["Rugby", "Koinonia"]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [{
      role: "Category Insights Analyst",
      company: "SellEthics Marketing Group",
      companylogo: require("./assets/images/sellethics_2.jpg"),
      date: "Feb 2017 - Nov 2020",
      desc: "Drove $100K+ annual revenues by building & updating dashboards, crafting presentations, and delivering reports",
      descBullets: ["Sales Presentations: PowerPoint, Food categories-clients-customers knowledge, Nielsen AOD, IRI Unify, Client & Sales Interaction", "Dashboards & Reporting: Excel, Pivot Tables, PowerQuery, PowerPivot, SQL Server, DAX Studio, VBA, ETL pipeline, Access"]
    },
    {
      role: "Retail Intelligence Analyst",
      company: "Acosta Sales & Marketing",
      companylogo: require("./assets/images/acosta_400x400.jpg"),
      date: "Feb 2016 - Jan 2017",
      desc: "Informed clients such as Nestle and JTI of fillable gaps in product distribution by analyzing & reporting in-house retail coverage data",
      descBullets: ["Outlook, Excel, SharePoint","Streamlined 2 teams' workflows through SharePoint webparts & automations"]

    },
    {
      role: "Administrative Manager",
      company: "United Receivables Group",
      companylogo: require("./assets/images/urg_cbkgc0vp_400x400.png"),
      date: "Dec 2012 - Jan 2016",
      desc: "Managed the administrative functions and interactions of a collections company with 50+ employees",
      descBullets: ["Soft Skills: Management, Business Communications, Leadership, Public Speaking, Employee Conflict Resolution", "Technical Skills: CollectionsMax Software, FDCPA training, Google Workspace"]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github - these are your pins, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  
  title: "Projects",
  subtitle: "Projects I've contributed to!",
  projects: [
    {
      // TODO: get pic  image: require("./assets/images/QuirkyQuiz.png"),
      image: require("./assets/images/007-Reviews.gif"),
      projectName: "007-Reviews",
      projectDesc: "Bond, James Bond's reviews. Summaries, beautiful photos, movie facts, and ratings comparisons (yours vs. TMDB users) of The Man with The Golden Gun.",
      footerLink: [{
          name: "Deployed App",
          url: "https://www.007-reviews.com/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/CodeWarrior-debug/007-reviews"
        },
        //  you can add extra buttons here.
      ]
    },{
      // TODO: get pic  image: require("./assets/images/QuirkyQuiz.png"),
      image: require("./assets/images/memento_multiverse.gif"),
      projectName: "Memento Multiverse",
      projectDesc: "Memento Multiverse is a fun and funny web store for merch that appreciates your favorite shows, their inside jokes, and transports you into their worlds.",
      footerLink: [{
          name: "Deployed App",
          url: "https://memento-tv-multiverse.herokuapp.com/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/CodeWarrior-debug/Memento-Multiverse"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      // TODO: get pic  image: require("./assets/images/QuirkyQuiz.png"),
      image: require("./assets/images/PokeBaller.gif"),
      projectName: "PokeBaller",
      projectDesc: "PokeBaller is a Card Inventory Organizer where you can digitally track your Pokemon cards. Eye-candy!",
      footerLink: [{
          name: "Deployed App",
          url: "http://pokeballers.herokuapp.com/"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/CodeWarrior-debug/PokeBaller"
        },
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📱"),
  subtitle: "Job or Freelance Opportunity? Project Collaboration? Reach out!",
  email_address: "jpjordan1987@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  openSource,
  contactInfo
};