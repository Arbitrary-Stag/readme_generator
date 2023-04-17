// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    { 
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'checkbox',
    message: 'What sections would you like to include in your table of contents?',
    name: 'tableOfContents',
    choices: ['Installation', 'Usage', 'Credits', 'License', 'Contributing', 'Tests', 'Questions'],
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'installation',
    message: 'Please provide a brief explanation of any installation instructions.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'usage',
    message: 'Please provide a brief explanation of how your project is used.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'credits',
    message: 'If there are any sources you wish to give credit to, please do so here.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'list',
    message: 'What license would you like to choose for your project?',
    name: 'license',
    choices: ['MIT', 'Apache-2.0', 'Boost', 'GNU GPL v2', 'GNU GPL v3', 'BSD 2-Clause License', 'BSD 3-Clause License', 'ISC', 'Mozilla Public License 2.0', 'N/A'],
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'contributing',
    message: 'Please provide if and how you would like others to contribute to your project.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'tests',
    message: 'If you wish to provide users with any tests, please write their instructions here.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'email',
    message: 'Please enter your preferred email for contact related to this project.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
  { 
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username.',
    validate: (value)=>{if (value){return true} else {return "Input is required to continue."}}
  },
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     const fileName = `${data.objA.toLowerCase().split(' ').join('')}.md`;

//     fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
// };

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(({
    title,
    description,
    tableOfContents,
    installation,
    usage,
    credits,
    license,
    contributing,
    tests,
    email,
    username,
  })=>{

  }) 
}

// Function call to initialize app
init();