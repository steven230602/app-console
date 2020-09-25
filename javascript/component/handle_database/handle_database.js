const fs = require('fs');

exports.readData = (url) => {
    const data = fs.readFileSync(url); // đọc dữ liệu từ database
    return JSON.parse(data);
}

exports.writeData = (url, data) => {
    fs.writeFileSync(url, data); // ghi lại dữ liệu vào database
}