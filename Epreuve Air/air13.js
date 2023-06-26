const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname);

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        if (file.endsWith('.js') && file !== path.basename(__filename)) {
            try {
                const script = require(path.join(directoryPath, file));
                script();
                console.log('\x1b[32m%s\x1b[0m', file + ' : succes');
            } catch (e) {
                console.log('\x1b[31m%s\x1b[0m', file  + ' : failure');
                console.log(e);
            }
        }
    });
});