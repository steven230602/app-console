const {writeData} = require("../handle_database/handle_database");
const {searchData} = require("../searchData/searchData");
const {removeData} = require("./removeData");
const {getData} = require("../getData/getData");
const {value} = require("../common/readline_file");


function logData (url) {
    const data = searchData(url); // dữ liệu đã được tìm kiếm
    data.forEach((element, index) => {
        console.log(index + 1);
        console.log(`name: ${element.name}`);
        console.log(`age: ${element.age}`);
        console.log("\n");
    })
    return data;
}

// Nhìn tên hàm là biết
exports.deleteData = (url) => {
    const data = logData(url);
    let chooseDataToEdit = value("Choose number of data need edit: ");
    let index = parseInt(chooseDataToEdit) - 1;
    if( typeof index === "number"){ // kiểm tra xem index có phải là số không
        let newData = removeData(data[index], url); // thực thi code ở file removeData.js
        writeData(url, JSON.stringify(newData)); // save lại vào file
        console.log("Done!");
    }else{ 
        console.log("Please retype!!");
        return this.editData(url);
    }
    getData(url);
}