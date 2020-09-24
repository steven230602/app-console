const {value} = require("./readline_file");
const {startApp} = require("./console.file")


exports.openApp = (content) => {
    if(value(content).toLowerCase() === 'a'){
        console.clear();
        startApp();
    } 
}