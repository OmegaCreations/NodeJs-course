const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head>');
        res.write('<title>My message</title></head>');
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (data) => {
            console.log(data);
            body.push(data);
        });
        return req.on('end', () => {
            const parse = Buffer.concat(body).toString();
            const message = parse.split('=')[1];
    
            
            
            fs.writeFile('message.txt', message, (err) => {
                res.writeHead(302, {
                    Location: `/`
                }).end();
                return;
            });
        });
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>My Page</title>');
    res.write('<body><h1>Hello from nodejs code!</h1></body>');
    res.write('</head>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;