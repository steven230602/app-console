const {readData} = require("../handle_file/handle_file");
const {value} = require("../handle_readln/readline_file");

// Như cái tên hàm
exports.editName = (id, url) => {
    let data = readData(url);
    let newName = value("New name: ");
    data.forEach((element) => {
        if(element.id === id){
            element["name"] = newName;
        }
    });
    return data
}