const {welcome} = require('./component/handle_readln/console.file');
const {openApp} = require('./component/handle_readln/start.handle')
const {command} = require('./component/handle_readln/useApp.handle');

welcome();
openApp('Type A and Enter to open app: ');

command('Type form 1 to 5: ')