const {readData} = require("../handle_database/handle_database");
const {value} = require("../common/readline_file");


// Nhìn tên hàm là biết
exports.editAgeName = (id, url) => {
    let data = readData(url);
    let newName = value("New name: ");
    let newAge = value("New age: ");
    for(let i = 0; i <= data.length; i++){
        if(data[i].id === id){
            data[i]["age"] = newAge;
            data[i]["name"] = newName;
            break;
        }
    };
    return data;
}