module.exports = function(routeList) {
    return function(req, res, next) {
        var responseJson = null;
        for(var i = 0; i < routeList.length; i++) {
            if(req.originalUrl === routeList[i].url) {
                responseJson = routeList[i].mockData;
                break;
            }
        }
        if(responseJson !== null) {
            res.status(200).json(responseJson);
        } else {
            next();
        }
    };
}