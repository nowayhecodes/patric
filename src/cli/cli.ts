import yargs, { Arguments } from 'yargs';

const argv = yargs
  .command('start', 'Start the application', {
    start: {
      description: 'starts the application',
      alias: 's',
      type: 'string',
    },
  })
  .option('mode', {
    alias: 'm',
    description: 'Specify the mode to start',
    type: 'string',
    choices: ['dev', 'stage', 'prod'],
  })
  .help()
  .alias('help', 'h').argv;

if (argv.mode) {
    console.log('Running in development mode');
    
}