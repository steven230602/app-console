const Data = require("../Schema/object_data");
const {menu} = require("./menu")

exports.dataUpdated = (dataNeedUpdate, url) => {
    console.clear()
    const id = dataNeedUpdate.id;
    return menu(id, url);
}