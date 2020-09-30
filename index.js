const DBI = require('switch-dbi');
const argv =  process.argv.splice(2);

const dbi = new DBI(argv, console.log);
dbi.start();
