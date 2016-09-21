var jsonfile = require('jsonfile')
var fs = require("fs");

module.exports = {
    loadIntitialSettings: function() {
        var proxySettings = {};
        if(fs.existsSync('proxy-server-settings.json')){
            var data = jsonfile.readFileSync('proxy-server-settings.json');
            var proxySettings = data || {};
        }
        return proxySettings;
    }
};