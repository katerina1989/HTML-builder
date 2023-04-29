const fs = require('fs');
const path = require('path');
let readStream = fs.createReadStream(path.join(__dirname,"text.txt"), {encoding: 'utf-8'});
let data = '';
readStream.on('data', function(chunk) {
    data += chunk;
})