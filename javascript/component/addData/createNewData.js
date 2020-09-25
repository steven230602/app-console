const {value} = require("../common/readline_file");
const Data = require("../Schema/object_data");

// Tạo đối tượng mới
exports.newData = () => {
    let inputName = value("Name: ");
    let inputAge = value("Age: ");
    const createData = new Data(inputName, inputAge); // tạo dối tượng
    
    return createData;
}