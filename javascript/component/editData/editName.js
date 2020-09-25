const {readData} = require("../handle_database/handle_database");
const {value} = require("../common/readline_file");

// Như cái tên hàm
exports.editName = (id, url) => {
    let data = readData(url);
    let newName = value("New name: ");
    
    for(let i = 0; i <= data.length; i++){
        if(data[i].id === id){
            data[i]["name"] = newName;
            break;
        }
    };
    return data
}