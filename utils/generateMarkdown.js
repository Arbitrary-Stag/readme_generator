// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License": return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; break;
    case "Apache-2.0 License": return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; break;
    case "Boost Software License": return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'; break;
    case "GNU General Public License v2": return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'; break;
    case "GNU General Public License v3": return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'; break;
    case "BSD 2-Clause License": return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)' ; break;
    case "BSD 3-Clause License": return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'; break;
    case "ISC License": return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)' ; break;
    case "Mozilla Public License 2.0": return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)' ; break;
    case "N/A": return ''; break;
    default: '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License": return 'https://opensource.org/licenses/MIT'; break;
    case "Apache-2.0 License": return 'https://opensource.org/licenses/Apache-2.0'; break;
    case "Boost Software License": return 'https://www.boost.org/LICENSE_1_0.txt'; break;
    case "GNU General Public License v2": return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'; break;
    case "GNU General Public License v3": return 'https://www.gnu.org/licenses/gpl-3.0'; break;
    case "BSD 2-Clause License": return 'https://opensource.org/licenses/BSD-2-Clause' ; break;
    case "BSD 3-Clause License": return 'https://opensource.org/licenses/BSD-3-Clause'; break;
    case "ISC License": return 'https://opensource.org/licenses/ISC' ; break;
    case "Mozilla Public License 2.0": return 'https://opensource.org/licenses/MPL-2.0' ; break;
    case "N/A": return ''; break;
    default: '';
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==="N/A") {
    return "";
  }
return `This application is covered under the [${license}](${renderLicenseLink(license)}). 
Please click the link for more information.
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
