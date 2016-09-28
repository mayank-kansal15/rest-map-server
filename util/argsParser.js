var fs = require("fs");

module.exports = function() {
    if(process.argv.length < 2 || process.argv.length > 3) {
        console.error("Wrong command usage");
        console.error('Usage: map-server port-number [public dir path to serve static files]');
        process.exit(1);
    }
    var port = process.argv[1];
    var dir = process.argv[2];

    if(isNaN(port)) {
        console.log("Provided port is not number");
        process.exit(1);
    }

    if(dir && !fs.existsSync(dir)) {
        console.log("Provided dir path does not exist");
        process.exit(1);
    }

    return {
        portNumber: Number(port),
        dirPath: dir
    }
};