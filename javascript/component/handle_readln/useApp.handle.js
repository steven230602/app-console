const {value} = require("./readline_file");

exports.command = (content) => {
    switch(value(content)) {
        case '1':
            console.log('1');
            break;
        case '2':
            console.log('2');
            break;
        case '3':
            console.log('3');
            break;
        case '4':
            console.log('4');
            break;
        case '5':
            console.log('5');
            break;
        default:
            console.log('You wrongly typed, please try again')
    }
}