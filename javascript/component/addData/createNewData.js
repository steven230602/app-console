const {value} = require("../handle_readln/readline_file");
const Data = require("../Schema/object_data");
const {generate} = require("shortid");


exports.newData = () => {
    let inputName = value("Name: ");
    let inputAge = value("Age: ");
    const createData = new Data(inputName, inputAge)
    
    return createData
}