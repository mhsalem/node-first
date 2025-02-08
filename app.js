// const { write } = require('fs');
// const http = require('http')
// const server =http.createServer((req,res)=>{
// if(req.url==='/'){
// res.end('welcome hp')
// return;
// }
// if(req.url==='/about'){
//     res.end('what aboutism')
//     return;
// }
// res.end(
//     `<h1>oppsie daisy</h1>
//     <a href="/"> gebbak</a>`
    
// )
// })
// server.listen(5000);
const _=require('lodash');
const items = [1,[2,[3,[4]]]];
const f=_.flattenDeep(items);
console.log(f);
