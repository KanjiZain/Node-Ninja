const http = require ('http');
const fs = require ('fs');
const _ = require('lodash');
const { once } = require('process');

const server = http.createServer((req,res) => {

const num = _.random(0,20);
console.log(num);

const greet = _.once(()=>{
    console.log('Hello')
});

greet();

    res.setHeader('Content-Type' , 'text/html')

 let path = './view/';
 switch(req.url) {
    case  '/':
        path += 'home.html';
        break;
     case  '/about':
        path += 'about.html';
        break;
    default: 
    path += '404.html';
    break;
 }

    fs.readFile(path , (err,data) => {
        if (err) {
            console.log('Error')
        }
        else {
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost' , () => {
    console.log('Listening for request on port 3000')
} )