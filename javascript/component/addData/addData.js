const {readData, writeData} = require("../handle_file/handle_file");
const {newData} = require("./createNewData")
// Tạo mới và lưu dữ liệu được nhập từ người dùng
exports.addData = (url) => { 
     
    let data = readData(url); // Dữ liệu được đọc từ file
    
    data.push(newData());  // thêm dữ liệu mới vào dữ liệu cũ

    writeData(url, JSON.stringify(data)); // ghi vào file
    // console.log(newData().id)
    console.log('Done!');
}