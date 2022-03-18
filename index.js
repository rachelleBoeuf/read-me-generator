// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',

},

{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address?'
},
{
    type: 'input',
    name: 'description',
    message: 'Please describe your application. This will be seen as the Description section of your README.md'
},
{
    type: 'input',
    name: 'installation',
    message: 'Please input your installation instructions.'
},
{
    type: 'input',
    name: 'usageInfo',
    message: 'Please input your usage information.'
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please enter your contribution guidelines'
},
{
    type: 'input',
    name: 'instructions',
    message: 'Please enter your test instructions'
},
{
    type: 'input',
    name: 'license',
    message: 'Which license did you use for your application'
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app


// Function call to initialize app

function init() {
    inquirer.prompt(
        questions
    ).then(function (answer) {
        console.log(answer);
        console.log(answer.title);
        const template = generateMarkdown(answer);
        console.log(template);
    })
}

// Function call to initialize app
init();