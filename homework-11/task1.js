const http = require('http');
const os = require('os');
const path = require('path');


const requestListener = function (request, responce) {
      
    const uptimeSeconds = Math.floor(os.uptime()); 
    const minutes = Math.floor(uptimeSeconds/60) %60;    

    let resp = "System informtion" + "\n" + "\n" + "Current user name: " + os.userInfo().username + "\n" 
    + "OS type: " + os.type() + "\n" + "Current work time: " + minutes + "." + uptimeSeconds%60 + "minutes" + "\n"
    + "Current work directory: " + __dirname + "\n" + "Server file name: " + path.basename(__filename);

    responce.end(resp)
}

const server = http.createServer(requestListener);
server.listen(5000);
