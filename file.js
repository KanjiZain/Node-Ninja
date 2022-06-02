// const { error } = require('console');
const { error } = require('console');
const fs = require ('fs');

// fs.readFile('./blog.txt' , (err,data) => {
// if (err) {
//     console.log(err);
// }
// console.log(data.toString());
// });

// fs.writeFile('./Blog.txt' , 'Hello World' , () => {
//     console.log('File Was Written');
// });


// if (!fs.existsSync('./file')) {
// fs.mkdir('./file' , (err) => {
//     if (err) {
//         console.log('Error 404');
//     }
//     console.log('Folder Created')
// })
// } else {
//     fs.rmdir('./file' , (err) => {
//         if (err) {
//             console.log(error)
//         }
//         console.log('Folder Deleted')
//     })
// }

// if (fs.existsSync ('./delete.txt')) {
//     fs.unlink ('./delete.txt' , (err) => {
//         if  (err) {
//             console.log(err)
//         }
//    console.log('File Deleted');
//     })
// }