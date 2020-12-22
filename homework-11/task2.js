const personaleModule = require('./personalmodule.js');
const os = require('os');
const http = require('http');

const requestListener = function (request, responce) {
    responce.end(personaleModule.greeting(os.userInfo().username))
}

const server = http.createServer(requestListener);
server.listen(5000)
