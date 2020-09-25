const Data = require("../Schema/object_data");
const {readData} = require("../handle_file/handle_file")

function updateData (id, url) {
    let data = readData(url);
    data.forEach((element) => {
        if(element.id === id){
            element["name"] = "Tho";
            element["age"] = "18"
        }
    });
    return data
}

exports.dataUpdated = (dataNeedUpdate, url) => {
    // console.clear()
    const id = dataNeedUpdate.id;
    return updateData(id, url);
}