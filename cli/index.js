#!/usr/bin/env node
const chalk = require('chalk');

const createApp = async () => {
  const appName = process.argv[2];

  if (!appName) {
    console.log(chalk.red('Please specify the app directory:'));
    console.log(
      chalk.green('npx rn-starter-app '),
      chalk.yellow('<app-directory>')
    );
    console.log();
    console.log('For example:');
    console.log(chalk.green('npx rn-starter-app '), chalk.yellow('my-app'));
    console.log();
    process.exit(1);
  }

  const repository = '';


};

createApp();
