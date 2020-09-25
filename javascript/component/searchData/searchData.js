const {value} = require('../common/readline_file');
const {readData} = require("../handle_database/handle_database");

// Module tìm kiếm

function result(keyword) { // tìm kiếm từ khóa theo keyword
    let resultList = []; //Mảng kết quả tìm kiếm

    for(let element of data) { // Tìm kiếm và đưa kết quả cần tìm vào mảng kết quả
        let name = element["name"].toLowerCase();
        let age = parseInt(element["age"]);
        if(name.indexOf(keyword.toLowerCase()) >= 0 || age === parseInt(keyword)){ // so sánh dữ liệu để tìm kết quả
            resultList.push(element);
        }
    };
    return resultList;
}
// Đưa về kết quả
exports.searchData = (url) => {
    data = readData(url);
    let values = value('Type name or age to search: '); // Dữ liệu cần tìm kiếm
    return (result(values).length > 0) ? result(values) : this.searchData(url); // Kiểm tra dữ liệu để đưa ra kết quả_
}
 