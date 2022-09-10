const http = require('http');
const port  = 5002;


function display(text){
    console.log("function display");
    return text; 
}


const server = http.createServer((req, res)=> {
    const urlReq = req.url;
    if (urlReq != '/favicon.ico'){

    // res.write('hello worldsss');
    let mytext = display("thi is test");
    console.log("this is area in creatServer");
    res.end("<h1>server 2 is starting at port "+ port +" </h1>");
    console.log("url is " + urlReq);
    
    }
   

}).listen(port, 'localhost',()=> {
    console.log("server is starting at pot " + port);
})
