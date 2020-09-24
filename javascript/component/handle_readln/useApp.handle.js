const {value} = require("./readline_file");
const {getData} = require("../handle.getData/getData")
const {addData} = require('../addData.handle/adData');

exports.command = (content) => {
    switch(value(content)) {
        case '1':
            getData('database.json')
            break;
        case '2':
            addData('database.json')
            break;
        case '3':
            console.log('3');
            break;
        case '4':
            console.log('4');
            break;
        case '5':
            console.log('5');
            break;
        default:
            console.log('You wrongly typed, please try again')
    }
}