const {searchData} = require('../search.handle/searchData');

exports.logGetData = (data) => {
    console.log("***********************************************************************************************");
    console.log("*                                      LIST PEOPLE                                            *")
    console.log("***********************************************************************************************");
    for(let i = 0; i < data.length; i++){
        console.log(`name: ${data[i].name}`);
        console.log(`age: ${data[i].age}`)
        console.log('\n')
    }
    searchData(data)
}