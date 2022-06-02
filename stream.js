const fs = require ('fs');

const readStream = fs.createReadStream('./blog.txt' , {encoding: 'utf-8'});
const writeStream = fs.WriteStream('./blog1.txt');

// readStream.on('data', (chunk) => {
//     console.log('-----------New Chunk---------');
//     console.log(chunk);
//     writeStream.write('\n New Chunk \n');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);