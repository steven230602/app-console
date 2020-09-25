const {value} = require("./readline_file");
const {getData} = require("../getData/getData")
const {addData} = require('../addData/addData');
const {editData} = require('../editData/editData');
const {searchData} = require("../searchData/searchData")

exports.command = (content) => {
    switch(value(content)) {
        case '1':
            getData('database.json')
            break;
        case '2':
            addData('database.json')
            break;
        case '3':
            editData('database.json')
            break;
        case '4':
            searchData('database.json')
            break;
        case '5':
            console.log('5');
            break;
        default:
            console.log('You wrongly typed, please try again')
    }
}