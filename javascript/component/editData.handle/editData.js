const {value} = require('../handle_readln/readline_file');
const fs = require('fs');
const {data} = require('../addData.handle/Schema');

function searchData () {

    const readfile = fs.readFileSync('database.json');
    const data = JSON.parse(readfile);

    let values = value('Type name to search: ');
    list = [];
    data.forEach((element) => {
        let lowerCase = element["name"].toLowerCase()
        if(lowerCase.indexOf(values.toLowerCase()) >= 0){
            list.push(element)
        }
    });
    return list
}


function logData () {
    const data = searchData();
    data.forEach((element, index) => {
        console.log(index + 1);
        console.log(`name: ${element.name}`);
        console.log(`age: ${element.age}`);
        console.log("\n")
    })
    return data;
}

exports.editData = (url) => {
    logData();
    let chooseDataToEdit = value("Choose number of data need edit: ");
    let newdData = data();
    let index = parseInt(chooseDataToEdit);

    let olddata = searchData();

    olddata[index - 1] = newdData;

    fs.writeFileSync(url, JSON.stringify(olddata))
    console.log("Done!")
}