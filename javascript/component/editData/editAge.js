const {readData} = require("../handle_database/handle_database");
const {value} = require("../common/readline_file");

// Nhìn tên hàm là biết
exports.editAge = (id, url) => {
    let data = readData(url);
    let newAge = value("New age: ");
    for(let i = 0; i <= data.length; i++){ // edit tên
        if(data[i].id === id){
            data[i]["age"] = newAge;
            break;
        }
    };
    return data
}