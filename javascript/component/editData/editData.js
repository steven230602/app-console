const {dataUpdated} = require("./updateData");
const {searchData} = require("../searchData/searchData");
const {writeData} = require("../handle_database/handle_database");
const {getData} = require("../getData/getData");
const {value} = require("../common/readline_file");

// Log ra màn hình kết quả tìm kiếm được 
function logData (url) {
    const data = searchData(url); // dữ liệu đã được tìm kiếm
    data.forEach((element, index) => {
        console.log(index + 1);
        console.log(`name: ${element.name}`);
        console.log(`age: ${element.age}`);
        console.log("\n")
    })
    return data;
}
    
// Dùng để sửa lại dữ liệu
exports.editData = (url) => {
    const data = logData(url);
    let chooseDataToEdit = value("Choose number of data need edit: ");
    let index = parseInt(chooseDataToEdit);
    
    if( typeof index === "number"){ // kiểm tra xem index có phải là số không
        const newData = dataUpdated(data[index-1],url);
        writeData(url, JSON.stringify(newData)); // save lại vào file
        console.log("Done!");
    }else{ 
        console.log("Please retype!!");
        return this.editData(url);
    }
    getData(url);
}