var express = require('express');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var app = express();

var DevAccController = require('./DevAccController');
app.use('/devAcc', DevAccController);

var BusinessAccController = require('./BuisnessAccController');
app.use('/businessAcc', BusinessAccController);

var AegisCoinController = require('./AegisCoinController');
app.use('/aegisCoin', AegisCoinController);

app.post('/changeOwnerAddress/:newOwner', async function(req, res, next){
    var aegisCoinUrl = "http://localhost:3000/aegisCoin/changeOwnerAddress/" + req.params.newOwner; 
    var devAccUrl = "http://localhost:3000/devAcc/changeOwnerAddress/" + req.params.newOwner;
    var busAccUrl = "http://localhost:3000/businessAcc/changeOwnerAddress/" + req.params.newOwner;

    function promisedRequest(url) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) {
                    return;
                }
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    var error = xhr.statusText;
                    reject(error);
                }
            };
        });
    }

    var aegisCoinRes = await promisedRequest(aegisCoinUrl);
    var devAccRes    = await promisedRequest(devAccUrl);
    var busAccRes    = await promisedRequest(busAccUrl);

    res.send('AegisCoin Result: \n'+ JSON.stringify(aegisCoinRes) + '\n' +
              'Development Acc Result: \n'+ JSON.stringify(devAccRes) + '\n' +
              'Business Acc Result: \n'+ JSON.stringify(busAccRes));
});

module.exports = app;
