import yargs, { Arguments, check } from 'yargs';
import { cpus } from 'os';
import { fork, isMaster, isWorker, worker } from 'cluster';

const argv: Arguments = yargs
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
    default: 'dev',
  })
  .option('cluster', {
    alias: 'c',
    description:
      'Indicates wether you want to run the application in cluster mode',
    type: 'boolean',
    default: false,
  })
  .option('ui', {
    description: 'Pass true if you want to start with the web interface',
    type: 'boolean',
    default: false,
  })
  .help()
  .alias('help', 'h').argv;

if (argv.mode) {
  console.log('Running in development mode');
}