const inq = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const question = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {

        type: 'input',
        name: 'description',
        message: 'What is your project all about?',
    },
    {

        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },

    {
		type: 'input',
		message: 'What is your application used for?',
		name: 'usage',
	},
    {
		type: 'checkbox',
		message: 'What kind of license is used?',
		name: 'license',
		choices: ['BSD', 'MIT', 'GPL'],
	},
    {
		type: 'input',
		message: 'What are the guidelines to contributing?',
		name: 'contribute',
	},
    {

        type: 'input',
        name: 'deployedLink',
        message: 'What is the link to your deployed project?',
    },
    {

        type: 'input',
        name: 'githubusername',
        message: 'What is your GitHub username?',
    },
    {

        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },


]

function createReadme(args) {
    fs.writeFileSync ('./README.md',`this is the arugments: ${args}`);


}


    createReadme('🍙🍛');

