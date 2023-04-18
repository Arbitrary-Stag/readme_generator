// These are the packages necessary for the app to run. 
const inquirer = require('inquirer');
const fs = require('fs');
const genMd = require('./utils/generateMarkdown.js');

// This array of objects are questions that will be prompted to the user.
// The data collected from these questions will then later be used to fill a README.md template.
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
    choices: ['MIT License', 'Apache-2.0 License', 'Boost Software License', 'GNU General Public License v2', 'GNU General Public License v3', 'BSD 2-Clause License', 'BSD 3-Clause License', 'ISC License', 'Mozilla Public License 2.0', 'N/A'],
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


// This function uses fs to write a new file at a specified location, with specified data.
// If the function fails for some reason it is designed to console log the error that occurred.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error", err);
      return;
    }
    console.log("Your README has been successfully generated!");
  });
}
// This function initializes the app. It calls on Inquierer to prompt the user the array of questions
// then uses the answers from those prompts to write the file using the code in the generateMarkdown.js file.
function init() {
  inquirer.prompt(questions).then((answers) => {

    writeToFile("./example/README.md", genMd.generateMarkdown(answers));

  });
}

// Calls the init() function. 
init();