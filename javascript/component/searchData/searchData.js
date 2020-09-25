const {value} = require('../handle_readln/readline_file');
const {readData} = require("../handle_file/handle_file");
const { newData } = require('../addData/createNewData');

// Tìm kiếm dữ liệu theo tên hoặc tuổi
exports.searchData = (url) => {
    
    data = readData(url);
    let values = value('Type name or age to search: '); // Dữ liệu cần tìm kiếm
    let result = []; //Mảng kết quả tìm kiếm

    for(let element of data) { // Tìm kiếm và đưa kết quả cần tìm vào mảng kết quả
        let name = element["name"].toLowerCase();
        let age = parseInt(element["age"]);
        if(name.indexOf(values.toLowerCase()) >= 0 || age === parseInt(values)){
            result.push(element);
        }
    };
    return result // trả về kết quả
}