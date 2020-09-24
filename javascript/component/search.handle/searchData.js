const {value} = require('../handle_readln/readline_file');

exports.searchData = (data) => {
    let values = value('Type name to search: ');
    list = [];
    data.forEach((element) => {
        let lowerCase = element["name"].toLowerCase()
        if(lowerCase.indexOf(values.toLowerCase()) >= 0){
            list.push(element)
        }
    });
    console.log(list)
}