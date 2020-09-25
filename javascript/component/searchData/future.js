const {searchData} = require("./searchData");

exports.findData = (url) => {
    let datas = searchData(url);
    console.log("**************************");
    console.log("*    Kết quả tìm kiếm    *");
    console.log("**************************");
    for(data of datas) {
        console.log(`Name: ${data.name}`);
        console.log(`Age: ${data.age}`);
        console.log("\n")
    }
}