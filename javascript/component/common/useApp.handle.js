const {value} = require("./readline_file");
const {getData} = require("../getData/getData");
const {addData} = require('../addData/addData');
const {editData} = require('../editData/editData');
const {searchData} = require("../searchData/searchData");
const {deleteData} = require("../deleteData/deleteData");

exports.command = (content) => {
    switch(value(content)) {
        case '1':
            getData('database.json');
            break;
        case '2':
            addData('database.json');
            break;
        case '3':
            editData('database.json');
            break;
        case '4':
            searchData('database.json');
            break;
        case '5':
            deleteData('database.json');
            break;
        default:
            console.log('You wrongly typed, please try again'); 
            this.command(content);
    }
}

// hàm bên trên dùng để kích hoạt các chức năng trong menu dưới đây

// ***********************************************************************************************
// *                                      WELCOME TO MY APP                                      *
// ***********************************************************************************************
// ***                                                                                         ***
// ***  1.    See Data                                                                         ***
// ***  2.    Create Data                                                                      ***
// ***  3.    Update Data                                                                      ***
// ***  4.    Search Data                                                                      ***
// ***  5.    Delete Data                                                                      ***
// ***                                                                                         ***
// ***********************************************************************************************
// ***********************************************************************************************