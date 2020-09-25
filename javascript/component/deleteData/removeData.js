const {readData} = require("../handle_database/handle_database");

// Nhìn tên hàm là biết

exports.removeData = (dataNeedDelete, url) => {
    let data = readData(url);
    for(let i = 0; i <= data.length; i++) { // xóa dữ liệu cần xóa
        if(data[i].id === dataNeedDelete.id){
            data.splice(i, 1);
            break;
        }
    };
    return data
}