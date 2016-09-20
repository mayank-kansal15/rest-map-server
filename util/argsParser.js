var fs = require("fs");

module.exports = function() {
    if(process.argv.length !== 4) {
        console.log("Provide all required args");
        console.log('Eg: node server.js portNumber "path to public like dir to serve"');
        process.exit(1);
    }

    if(isNaN(process.argv[2])) {
        console.log("Provided port is not number");
        process.exit(1);
    }
    var portNumber = Number(process.argv[2]);

    if(!fs.existsSync(process.argv[3])) {
        console.log("Provided dir path to serve files does not exist");
        process.exit(1);
    }
    var dirPath = process.argv[3];
    return {
        portNumber: Number(process.argv[2]),
        dirPath: process.argv[3]
    }
};