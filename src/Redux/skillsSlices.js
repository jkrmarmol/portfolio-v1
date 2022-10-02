import HTML5Logo from '../Assets/Images/html.71184de1.svg';
import CSS3Logo from '../Assets/Images/css-3.212d777a.svg';
import JSLogo from '../Assets/Images/javascript.de4c2594.svg';
import PHPLogo from '../Assets/Images/new-php-logo.png';
import CPPLogo from '../Assets/Images/ISO_C++_Logo.svg.png';
import ReactJSLogo from '../Assets/Images/download.png';
import ExpressjsLogo from '../Assets/Images/expressjs-logo.svg';
import NodeLogo from '../Assets/Images/nodejs-icon-logo.svg';
import MySQLLogo from '../Assets/Images/planet-logo.svg';
import PostgreSQLLogo from '../Assets/Images/Postgresql_elephant.svg';
import GITLogo from '../Assets/Images/git.1396a4ad.svg';
import CLILogo from '../Assets/Images/official-bash-logo512x512.png';
import PostmanLogo from '../Assets/Images/postman.svg';

import { createSlice } from "@reduxjs/toolkit";

const skillsSlices = createSlice({
  name: 'skills',
  initialState: [
    { name: 'HTML5', image: HTML5Logo, alt: 'HTML5 Logo' },
    { name: 'CSS3', image: CSS3Logo, alt: 'CSS3 Logo' },
    { name: 'JavaScript', image: JSLogo, alt: 'JavaScript Logo' },
    { name: 'PHP', image: PHPLogo, alt: 'PHP Logo' },
    { name: 'C++', image: CPPLogo, alt: 'C++ Logo' },
    { name: 'ReactJS', image: ReactJSLogo, alt: 'ReactJS Logo' },
    { name: 'Express.js', image: ExpressjsLogo, alt: 'Express.js Logo' },
    { name: 'Node.js', image: NodeLogo, alt: 'Node.js Logo' },
    { name: 'MySQL', image: MySQLLogo, alt: 'MySQL Logo' },
    { name: 'PostgreSQL', image: PostgreSQLLogo, alt: 'PostgreSQL Logo' },
    { name: 'GIT', image: GITLogo, alt: 'GIT Logo' },
    { name: 'CLI', image: CLILogo, alt: 'CLI Logo' },
    { name: 'Postman', image: PostmanLogo, alt: 'Postman Logo' }
  ],
  reducers: {
    showSkillsLogo: (state, action) => {
      return state;
    }
  }
})


export default skillsSlices.reducer;
export const selectSkills = (state) => state;