const {value} = require("./readline_file");
const {startApp} = require("./console.file");

// Mở app khi nhấn enter
exports.openApp = (content) => {
    value(content);
    console.clear();
    startApp(); 
}