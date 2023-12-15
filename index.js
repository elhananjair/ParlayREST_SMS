const http = require('node:http');
const postData = JSON.stringify({
    "subscription": {
        "callbackReference": {
            "notifyURL": "http://ApplicationIP/Client IP:PORT/",
            "callbackData": 123,
            "notificationFormat": "json"
        },
        "destinationAddress": 1234,
        "criteria": "order"
    }
});

const options = {
    hostname: ' Server IP',
    port: PORT_number,
    path: '/1/smsmessaging/inbound/subscriptions'
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'WSSE realm="SDP", profile="UsernameToken"',
        'X-WSSE': 'UsernameToken Username="username", PasswordDigest="H1JehEGk7J9VIIb5Hlvcz5QZg6U=", Nonce="66C92B11FF8A425FB8D4CCFE0ED9ED1F", Created="2023-10-19T10:04:32Z"',
        'Content-Type': 'application/json',
        'Content-Length':  1024 ,
        'Connection': 'keep-alive',
        'X-RequestHeader': 'request'
    },
};

const req = http.request(Option, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e}`);
    console.log(JSON.stringify(e))
});

// Write data to request body

req.write(postData);
console.log(req.headers);
req.end();
