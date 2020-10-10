module.exports = {
  apps: [
    {
      name: 'Patric REST',
      script: './dist/backend/server/index.js',
      watch: true,
      "ignore_watch": [
        "/[\s\S].spec.js$/", // don't restart on test file change
        "node_modules",
        "docs"
      ],
      exec_mode: 'cluster',
      instances: 0,
      out_file: './logs/out.log',
      error_file: './logs/err.log',
      combine_logs: true
    },
    {
      name: 'Patric UI',
      // script: './dist'
    },
    // {
    //   script: './service-worker/',
    //   watch: ['./service-worker'],
    // },
  ],

  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
