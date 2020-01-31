const fs = require("fs")
const inquirer = require("inquirer")
const axios = require("axios")
const htmlPdf = require("html-pdf")
const generateHTML = require("./generateHTML")



const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Username?"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["red", "blue", "pink", "green"]

    }
];

inquirer.prompt(questions).then(function ({ username, color }) {

    axios
        .get(`https://api.github.com/users/${username}`)
        .then(function (response) {
            console.log(response.data);

            htmlPdf.create(generateHTML(response, color)).toFile("./gitHubProfile.pdf", function (err, response) {
                if (err) {
                    throw err;
                } else {
                    console.log(response)
                }
            })

            fs.writeFile("generate.html", generateHTML(response, color), function (err, result) {
                if (err) {
                    throw err;
                } else { console.log(result) }
            })

        });






})








