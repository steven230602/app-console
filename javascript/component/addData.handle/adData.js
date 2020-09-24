const fs = require('fs');
const {data} = require('./Schema')

exports.addData = (url) => {

    let readData = fs.readFileSync(url);
    let newData = JSON.parse(readData);

    newData.push(data())

    fs.writeFileSync(url, JSON.stringify(newData))

    console.log('Done!')
}