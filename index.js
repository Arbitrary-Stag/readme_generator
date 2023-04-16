// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
  },
  {
    type: 'checkbox',
    message: 'What sections would you like to include in your table of contents?',
    name: 'tableOfContents',
    choices: ['Installation', 'Usage', 'Credits', 'License', 'Contributing', 'Tests', 'Questions'],
  },
  {
    type: 'list',
    message: 'What license would you like to choose for your project?',
    name: 'license',
    choices: ['MIT', 'Apache-2.0', 'Boost', 'GNU GPL v2', 'GNU GPL v3', 'BSD 2-Clause License', 'BSD 3-Clause License', 'ISC', 'Mozilla Public License 2.0'],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();