var http = require('http');

var server = http.createServer(function (request, response) {

    var allowedOrigins = ['http://127.0.0.1:8080', 'http://localhost:8080', 'chrome-extension://onameflbhebfjidplgfoioinleegllia'];
    var origin = request.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        response.setHeader('Access-Control-Allow-Origin', origin);
    }
    console.log('Origin: ', origin);
    //response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (request.method === 'OPTIONS') {
        console.log('OPTIONS');
        response.statusCode = 200;
        response.end();
    }
    if (request.method === 'GET') {
        console.log('GET');
        response.end("hello world");
    }
    if (request.method === 'POST') {
        console.log('post');
        var body = [];
        request.on('data', function (chunk) {
            body.push(chunk);
        }).on('end', function () {
            body = Buffer.concat(body).toString();
            console.log(JSON.parse(body));//TODO: Write to DB here
            response.statusCode = 202;
            xhrResponse = { status: 'success' };
            xhrResponse = JSON.stringify(xhrResponse);
            response.end(xhrResponse);
        })
    }

    else {
        response.statusCode = 404;
        response.end();
    }
})
port = 5002;
host = '10.200.168.96';
server.listen(port, host);
console.log('Listening at http://' + host + ': ' + port);