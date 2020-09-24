const {value} = require('../handle_readln/readline_file');

exports.data = () => {
    let name = value("name: ");
    let age = value("age: ");
    let obj = {name, age}
    return obj
}