const readline = require("readline-sync");

// module nhập đầu vào từ console
exports.value = (content) => {
    return readline.question(content);
}