import path from 'path';

import yargs, { Arguments } from 'yargs';
import pm2 from 'pm2';

const argv: Arguments = yargs
  .command('start', 'Start the application', {
    start: {
      description: 'starts the application',
      alias: 's',
      type: 'string',
    },
  })
  .option('ui', {
    description: 'Pass true if you want to start with the web interface',
    type: 'boolean',
    default: false,
  })
  .help()
  .alias('help', 'h').argv;

console.group('CLI parameters:');
console.log(`START?: ${argv._.includes('start')}`);
console.groupEnd();

if (argv._.includes('start')) {
  pm2.start(
    {
      script: path.resolve(__dirname, '../backend/server/index.js'),
      name: 'Patric REST',
      exec_mode: 'cluster',
      instances: 0,
      watch: true,
      output: '../../logs/out.log',
      error: '../../logs/err.log',
    },
    (err, apps) => {
      pm2.disconnect();
      if (err) throw err;
    }
  );
}
