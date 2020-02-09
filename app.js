
const http = require('http');

http.createServer((req, resp) => {

    resp.writeHead(200, {'Content-type': 'application/json'});
    
    let proof = {
        name: 'Lebron',
        surname: 'James',
        url: req.url
    };

    resp.write(JSON.stringify(proof));
    resp.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');