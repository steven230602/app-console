const Data = require("../Schema/object_data");
const {menu} = require("./menu");

// trung gian để thực hiện các việc Edit
exports.dataUpdated = (dataNeedUpdate, url) => {
    console.clear();
    const id = dataNeedUpdate.id;
    return menu(id, url);
}