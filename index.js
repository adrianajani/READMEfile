// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for contributing to the project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']  
    
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(__dirname, fileName);
    const markdown = generateMarkdown(data);
    
    fs.writeFile(filePath, markdown, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README file created successfully!');
        }
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('./NewReadmeFile/README.md', answers);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();
