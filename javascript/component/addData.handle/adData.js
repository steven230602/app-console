const fs = require('fs');
const {data} = require('./Schema')
exports.addData = (url) => {
    let readData = fs.readFileSync(url);
    let newData;
    if(!(readData instanceof Array)){
        newData = [];
        newData.push(data());
        fs.writeFileSync(url, JSON.stringify(newData))
    }else{
        newData = JSON.parse(newData);
        newData.push(data());
        fs.writeFileSync(url, JSON.stringify(newData))
    }
    console.log('Done!')
}