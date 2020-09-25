const {readData} = require("../handle_file/handle_file")

// Hiển thị dữ liệu ra màn hình
exports.getData = (url) => {
    console.log("***********************************************************************************************");
    console.log("*                                      LIST PEOPLE                                            *");
    console.log("***********************************************************************************************");
    const data = readData(url); // dữ liệu được lấy từ database
    for(let i = 0; i < data.length; i++){ // in dữ liệu ra màn hình
        console.log(`name: ${data[i].name}`);
        console.log(`age: ${data[i].age}`)
        console.log('\n')
    }
}