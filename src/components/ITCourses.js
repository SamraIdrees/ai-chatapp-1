import React from "react";
import "./ITCourses.css";

const platforms = [
  {
    name: "Codecademy",
    link: "https://www.codecademy.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Codecademy_Logo_2021.svg",
  },
  {
    name: "edX",
    link: "https://www.edx.org",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/EdX_logo.svg",
  },
  {
    name: "Coursera",
    link: "https://www.coursera.org",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Coursera_logo.svg",
  },
  {
    name: "Khan Academy",
    link: "https://www.khanacademy.org",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Khan_Academy_logo.svg",
  },
  {
    name: "Udemy",
    link: "https://www.udemy.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Udemy_Logo.svg",
  },
  {
    name: "freeCodeCamp",
    link: "https://www.freecodecamp.org",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.svg",
  },
  {
    name: "Udacity",
    link: "https://www.udacity.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Udacity_logo.svg",
  },
  {
    name: "The Odin Project",
    link: "https://www.theodinproject.com",
    logo: "https://www.theodinproject.com/assets/logo.png",
  },
  {
    name: "W3Schools",
    link: "https://www.w3schools.com",
    logo: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
  },
  {
    name: "Pluralsight",
    link: "https://www.pluralsight.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Pluralsight_logo.png",
  },
  {
    name: "Team Treehouse",
    link: "https://teamtreehouse.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Team_Treehouse_logo.svg",
  },
  {
    name: "Code Avengers",
    link: "https://www.codeavengers.com",
    logo: "https://www.codeavengers.com/img/favicon/apple-icon-180x180.png",
  },
  {
    name: "Codewars",
    link: "https://www.codewars.com",
    logo: "https://www.codewars.com/packs/assets/logo.61192cf7.svg",
  },
  {
    name: "Sololearn",
    link: "https://www.sololearn.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Sololearn_logo.png",
  },
  {
    name: "Code.org",
    link: "https://www.code.org",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Code.org_logo.svg",
  },
  {
    name: "Upskill",
    link: "https://upskillcourses.com",
    logo: "https://upskillcourses.com/img/upskill-logo.svg",
  },
  {
    name: "MIT OpenCourseWare",
    link: "https://ocw.mit.edu",
    logo: "https://ocw.mit.edu/images/logo_mit_ocw.png",
  },
  {
    name: "OneMonth",
    link: "https://www.onemonth.com",
    logo: "https://www.onemonth.com/assets/logos/onemonth-logo.svg",
  },
  {
    name: "Dash, by General Assembly",
    link: "https://dash.generalassemb.ly",
    logo: "https://dash.generalassemb.ly/favicon.ico",
  },
  {
    name: "Learn, by Google Developers",
    link: "https://developers.google.com/learn",
    logo: "https://www.gstatic.com/devrel-devsite/prod/vc87fba9a2482e2c71c46af0b86643fa050d0f47fa5120e422a1aa57fa6e0a735/developers/images/favicon.png",
  },
  {
    name: "Envato Tuts+",
    link: "https://tutsplus.com",
    logo: "https://cdn.tutsplus.com/favicon.ico",
  },
  {
    name: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/LinkedIn_Logo.svg",
  },
  {
    name: "SitePoint",
    link: "https://www.sitepoint.com",
    logo: "https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/favicon.png",
  },
  {
    name: "Coderbyte",
    link: "https://www.coderbyte.com",
    logo: "https://coderbyte.com/assets/images/favicons/favicon-96x96.png",
  },
  {
    name: "Edabit",
    link: "https://edabit.com",
    logo: "https://edabit.com/favicon.ico",
  },
  {
    name: "SQLZoo",
    link: "https://sqlzoo.net",
    logo: "https://sqlzoo.net/wiki/images/3/3b/Icon_sqlzoo.gif",
  },
  {
    name: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org",
    logo: "https://www.geeksforgeeks.org/favicon.ico",
  },
  {
    name: "Codingbat",
    link: "https://codingbat.com",
    logo: "https://codingbat.com/logo.gif",
  },
  {
    name: "Bitdegree",
    link: "https://www.bitdegree.org",
    logo: "https://www.bitdegree.org/favicon.ico",
  },
  {
    name: "Codeasy",
    link: "https://codeasy.net",
    logo: "https://codeasy.net/favicon.ico",
  },
];

const ITCourses = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Course Platforms</h1>
      <div className="category-container">
        {platforms.map((platform, index) => (
          <div className="category-card" key={index}>
            <img
             src={platform.logo}
             alt={`${platform.name} logo`}
              className="category-logo"
             />

            <h3 className="category-title">{platform.name}</h3>
            <p className="category-description">
              Discover courses and resources at {platform.name}.
            </p>
            <div className="card-hover">
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-courses-btn"
              >
                Visit Platform
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  
export default ITCourses;