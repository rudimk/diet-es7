require("babel-core/register")
require("babel-polyfill")

const server = require('diet')
let app = server()
app.listen('http://localhost:8000')

let HelloWorld = function($){
    $.end('Hello World!')
}

app.get('/hello', HelloWorld)