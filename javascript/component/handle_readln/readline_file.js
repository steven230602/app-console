const readline = require("readline-sync")

exports.value = (content) => {
    return readline.question(content)
}