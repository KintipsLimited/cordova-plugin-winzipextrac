var exec = require('cordova/exec');

exports.resize = function (zipFileName) {
    return new Promise((resolve, error) => {
        exec(resolve, error, 'extractFile', 'uwp', zipFileName);
    });
};