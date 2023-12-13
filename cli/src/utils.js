/**
 * @reference https://github.com/obytes/react-native-template-obytes/blob/master/cli/utils.js
 */
const { exec } = require('child_process');
const { createSpinner } = require('nanospinner');
const chalk = require('chalk');
const log = console.log;
const path = require('path');
const fs = require('fs-extra');

function executeShellCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
}

async function runCommand(
  command,
  {
    successMessage = 'something went good',
    errorMessage = 'something went wrong',
    loadingMessage = 'something is happening',
  }
) {
  const spinner = createSpinner(loadingMessage).start({
    text: loadingMessage,
  });
  try {
    await executeShellCommand(`${command}`);
    spinner.success({
      text: successMessage,
    });
  } catch (error) {
    spinner.error({
      text: errorMessage,
    });
    log(chalk.red(error));
    process.exit(1);
  }
}

async function setupGit(name) {
  const command = `cd ${name} && git init && cd ..`;

  await runCommand(command, {
    successMessage: 'Git initialized',
    errorMessage: 'Error initializing git',
    loadingMessage: 'Initializing git...',
  });
}

function showProjectDetails(name) {
  log(
    '\n\n\n',
    chalk.green(`Let's celebrate 🎉🎉🎉\n\n`),
    chalk(`Your project is ready at ${chalk.green(name)}\n\n`),
    chalk(`To get started, you can type:\n\n`),
    chalk.green(`cd ${name}\n`),
    chalk('IOS     :  pnpm ios \n'),
    chalk('Android :  pnpm android \n\n'),
    chalk('To run the app in development mode:\n\n'),
    chalk.green('pnpm start\n\n'),
    chalk('Happy hacking! 🚀🚀🚀\n\n')
  );
}

const cleanUp = async (name) => {
  const spinner = createSpinner(`Cleaning project folder...`).start();
  const FILES_TO_REMOVE = [
    '.git',
    'README.md',
    'ios',
    'android',
    'docs',
    'cli',
    'LICENSE',
  ];
  try {
    FILES_TO_REMOVE.forEach((file) => {
      fs.removeSync(path.join(process.cwd(), `${name}/${file}`));
    });
    spinner.success({ text: 'Project folder cleaned' });
  } catch (error) {
    spinner.error({ text: error });
    console.log(chalk.red(`Failed to clean up project folder`), error);
    process.exit(1);
  }
};

async function installDependencies(name) {
  const command = `cd ${name} && pnpm install`;

  await runCommand(command, {
    successMessage: 'Dependencies installed',
    errorMessage: 'Error installing dependencies',
    loadingMessage: 'Installing dependencies...',
  });
}

async function cloneRepository(name) {
  const cloneStarter = `git clone --depth=1 https://github.com/FelipeVa/react-native-xtam-template.git ${name}`;

  await runCommand(cloneStarter, {
    successMessage: 'Project created',
    errorMessage: 'Error creating project',
    loadingMessage: 'Creating project...',
  });
}

async function updatePackageJson(name) {
  const spinner = createSpinner('Updating project details...').start();
  const packageJsonPath = path.join(process.cwd(), `${name}/package.json`);
  const packageJson = fs.readJsonSync(packageJsonPath);
  packageJson.name = name;
  packageJson.version = '0.0.1';
  packageJson.description = 'A Expo starter application for React Native';
  packageJson.author = '';
  packageJson.repository = {
    type: 'git',
    url: 'git+https://github.com/user/repo-name.git',
  };

  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
  spinner.success({ text: 'Project details updated' });
}

async function prepareProject(name) {
  await cloneRepository(name);
  await cleanUp(name);
  await setupGit(name);
  await updatePackageJson(name);
  await installDependencies(name);
}

module.exports = {
  runCommand,
  setupGit,
  executeShellCommand,
  cleanUp,
  log,
  showProjectDetails,
  installDependencies,
  cloneRepository,
  updatePackageJson,
  prepareProject,
};
