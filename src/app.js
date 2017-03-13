require("babel-core/register")
require("babel-polyfill")

const server = require('diet')
const got = require('got')
let app = server()
app.listen('http://localhost:8000')

let HelloWorld = function($){
    $.end('Hello World!')
}

async function getGithubDetails($){
    let response = await got('https://api.github.com/users/rudimk')
    let user = JSON.parse(response.body)
    $.json(user)
}

app.get('/hello', HelloWorld)
app.get('/github', getGithubDetails)