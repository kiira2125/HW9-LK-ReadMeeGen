
// TODO: Include packages needed for this application
const inq = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');



//my list of quesiton 
const questions = [

    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
        default: 'README Generator'
    },
    {
        type: 'input',
        message: 'What is your project all about?',
        name: 'Description',
        default: 'Creates a README File'
    },
    {
        type: 'input',
        message: 'How do you install your application?',
        name: 'Installation',
        default: 'Copy the repository to your system, install inquirer, run: node index.js'
    },
    {
        type: 'input',
        message: 'What is your application used for?',
        name: 'Usage',
        default: 'creating a README File'
    },
    {
        type: 'list',
        message: 'What kind of license is used?',
        name: 'License',
        choices: ['BSD', 'MIT', 'GPL', 'None']
    },
    {
        type: 'input',
        message: 'What are the guidelines to contributing?',
        name: 'Contributing',
        default: 'Practice, practice, practice'
    },
    {
        type: 'input',
        message: 'How can I test your application?',
        name: 'Tests',
        default: 'Terminal window'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Github',
        default: 'Kiira2125'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
        default: 'lunakiira0911@gmail.com'
    },
];
// TODO: Create a function to write README file  /(fileName, data) = previous parameters
function createReadme(answers) {
    fs.writeFileSync ('./README.md',`
    # ${answers.title}
    ## Project title
    ${answers.description}
    ## Descripion
    ${answers.installation}
    ## Installation instructions
    ${answers.usage}
    ## Usage
    ${answers.contribute}
    ## Guidelines Contribution
    ${answers.link}
    ## Deploy Link
    ${answers.githubUsername}
    ## Github username?
    ${answers.email}
    ## Email address?

`);
}

// TODO: Create a function to initialize app

function init() {
inq
.prompt(questions)
.then((answers) =>{
    createReadme(answers);
    console.log('O_~Successfully created README.md');
})

.catch((error) =>{
    if (error.isTtyError) {
        console.error('-_-Promt could not rendered in current environment');
    }else {
        console.error('Something went wrong O_o');
    }
   
});


// Function call to initialize app
init();


    //createReadme('🍙🍛');

