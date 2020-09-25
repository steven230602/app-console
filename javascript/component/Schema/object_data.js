const {generate} = require("shortid");

// Mẫu Data

function Data(inName, inAge ,id) {
    this.name = inName;
    this.age = inAge;
    this.id = generate();
}

module.exports = Data