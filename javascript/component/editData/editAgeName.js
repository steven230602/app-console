const {readData} = require("../handle_file/handle_file");
const {value} = require("../handle_readln/readline_file");

exports.editAgeName = (id, url) => {
    let data = readData(url);
    let newName = value("New name: ");
    let newAge = value("New age: ");
    data.forEach((element) => {
        if(element.id === id){
            element["age"] = newAge;
            element["name"] = newName
        }
    });
    return data
}