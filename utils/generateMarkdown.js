// This function uses a switch case statement to return the correct license badge 
// based on the selection made by the user. If N/A was chosen an empty string is returned.
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

// This function also uses a switch case statement as above, to return the correct "learn more" link
// about the license the user selected for their project. 
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
// This function generates the string the that will fill the License section of the README file
// if the user selected a license to apply, otherwise it will return an empty string. 
function renderLicenseSection(license) {
  if (license ==="N/A") {
    return "";
  }
return `This application is covered under the [${license}](${renderLicenseLink(license)}). 
If you would like to learn more about this license, please click the link above.
`
}

// This function generates the content of the README file and is then exported to the index.js.
// It is essentially a string, that is utilizing markdown formatting and javascript to fill in 
// the sections with data collected from Inquirer. 
function generateMarkdown(data) {
  return `# ${data.title}\n
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
GitHub: [${data.username}](https://github.com/${data.username})\n
Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = {generateMarkdown};
