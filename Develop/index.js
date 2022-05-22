
// TODO: Include packages needed for this application
const {prompt} = require('inquirer');
const fs = require('fs');
//const chalk = require('chalk');

//my list of quesiton 
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: 'README Generator'
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'What is your project all about?',
        default: 'Creates a README File'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?',
        default: 'Copy the repository to your system, install inquirer, run: node index.js'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is your application used for?',
        default: 'creating a README File'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What kind of license is used?',
        choices: ['BSD', 'MIT', 'GPL', 'None'],
        default: 'MIT'
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines to contributing?',
        default: 'Practice, eat, sleep, workout, repeat'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'How can I test your application?',
       default: 'Terminal window'
    },

    {
        type: 'inpu',
        name: 'deploy link',
        message: 'What is the link to your deployed project?',
        default: "https://www.linkedin.com/in/luna-kiira-luna-kiira-19971109lk/"
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        default: 'Kiira2125'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: 'lunakiira0911@gmail.com'
    },
];

// TODO: create a prompt and then repose with print response by using my
//default answers.

prompt(questions).then((response) => console.log(response))
// TODO: Create a function to write README file  /(fileName, data) = previous parameters
// TODO: create fuctions for he questions
function createReadme(answers) {
    fs.writeFileSync ('./README.md',`
    ## Project title
    ${answers.title}
    ## Descripion
    ${answers.description}
    ## Installation instructions
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ##License
    ${answers.license}
    ## Guidelines Contribution
    ${answers.contribute}
    ## Test your app
    ${answers.test}
    ## Deploy Link
    [deploy link](${answers.link})
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
}
