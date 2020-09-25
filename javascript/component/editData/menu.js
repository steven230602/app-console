const {editName} = require("./editName");
const {editAge} = require("./editAge")
const {editAgeName} = require("./editAgeName")
 
const {value} = require("../handle_readln/readline_file");

exports.menu = (id, url) => {
    console.log('*****************');
    console.log('* 1. Edit Name  *');
    console.log('* 2. Edit Age   *');
    console.log('* 3. Edit Both  *');
    console.log('*****************');
    let chooseNumber = value("Choose how to edit (type number): ")
    switch(chooseNumber){
        case '1': 
        return editName(id,url);
        case '2':
        return editAge(id, url);
        case '3':
        return editAgeName(id, url);
        default: 
        return this.menu(id, url);
    }
}