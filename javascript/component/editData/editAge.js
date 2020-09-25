const {readData} = require("../handle_file/handle_file");
const {value} = require("../handle_readln/readline_file");

// Nhìn tên hàm là biết

exports.editAge = (id, url) => {
    let data = readData(url);
    let newAge = value("New age: ");
    data.forEach((element) => {
        if(element.id === id){
            element["age"] = newAge;
        }
    });
    return data
}