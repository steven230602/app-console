const {dataUpdated} = require("./updateData");
const {searchData} = require("../searchData/searchData");
const {writeData} = require("../handle_file/handle_file")
const {value} = require("../handle_readln/readline_file")

function logData (url) {
    const data = searchData(url);
    data.forEach((element, index) => {
        console.log(index + 1);
        console.log(`name: ${element.name}`);
        console.log(`age: ${element.age}`);
        console.log("\n")
    })
    return data;
}

exports.editData = (url) => {
    const data = logData(url);
    let chooseDataToEdit = value("Choose number of data need edit: ");
    let index = parseInt(chooseDataToEdit);

    const newData = dataUpdated(data[index-1],url)

    writeData(url, JSON.stringify(newData))
    // console.log("Done!")

}