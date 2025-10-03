import './global.css';
import { printHeader } from './src/sections/header.js';
import { printHero } from './src/sections/hero.js';
import { printAbout } from './src/sections/about.js';
import { printExperience } from './src/sections/experience.js';
import { printProjects } from './src/sections/projects.js';
import { printFooter } from './src/sections/footer.js';
import { printContact } from './src/sections/contact.js';
import { showBackToTop } from './src/components/backToTop.js';
import { showChangeSection } from './src/components/changeSectionButtons.js';

printHeader();
printHero();
printAbout();
printExperience();
printProjects();
printContact();
printFooter();
showBackToTop();
showChangeSection();

