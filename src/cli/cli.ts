import yargs, { Arguments, check } from 'yargs';
import { cpus } from 'os';
import * as cluster from 'cluster';

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
  .option('port', {
    alias: 'p',
    description: 'Sets up the port to run',
    type: 'number',
    default: 5555,
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

console.group('CLI parameters:');
console.log(`MODE: ${argv.mode}`);
console.log(`CLUSTER?: ${argv.cluster}`);
console.log(`PORT: ${argv.port}`);
console.groupEnd();

if (argv.cluster) {
  if (cluster.isMaster) {
    console.log(`Master process pid ${process.pid} is running`);

    for (let i = 0; i < cpus.length; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      cluster.fork();
    });
  } else {
  }
}
