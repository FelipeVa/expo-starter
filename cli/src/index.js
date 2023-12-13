#!/usr/bin/env node
const chalk = require('chalk');
const { showProjectDetails, prepareProject } = require('./utils');

const createApp = async () => {
  const appName = process.argv[2];

  if (!appName) {
    console.log(chalk.red('Please specify the app directory:'));
    console.log(
      chalk.green('npx create-xtam-app '),
      chalk.yellow('<app-directory>')
    );
    console.log();
    console.log('For example:');
    console.log(chalk.green('npx create-xtam-app '), chalk.yellow('my-app'));
    console.log();
    process.exit(1);
  }

  await prepareProject(appName);

  showProjectDetails(appName);
};

createApp();
