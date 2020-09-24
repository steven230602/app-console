const fs = require('fs');

const {logGetData} = require('./getData.Console');

exports.getData = (url) => {
    const data = fs.readFileSync(url);
    logGetData(JSON.parse(data))
}