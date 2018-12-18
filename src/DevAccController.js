var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var DevAccInfo =  require('./DevAccountInfo');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var W3JSR = DevAccInfo.getWeb3R();

/**
 * Endpoint URL to POST addNewBacklog function
 * @author GayathrideviHashCode
 * @param  {string} id     Backlog Id to be added
 * @param  {string} token  Set the default Token value
 * @return transaction hash as JSON response
 */
router.post('/addBacklog/:id/:token', function (req, res) {
    var retVal;
    var functionName = 'addNewBacklog';
    var params = [req.params.id, req.params.token];
    W3JSR.prepareSignSend(DevAccInfo.Params.ABI,DevAccInfo.Params.ADDRESS,functionName,DevAccInfo.Params.ETHER_ACC,DevAccInfo.Params.ETHER_PKEY,params)
    .then((result,error) =>{
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    },(error) =>{
        console.log(error);
        retVal = {"error":error};
        res.status(200).send(JSON.stringify(retVal));
    });
});

/**
 * Endpoint URL to POST setBacklogStatus function.
 * @author GayathrideviHashCode
 * @param  {string} id      Backlog Id to be added.
 * @param  {string} status  Update the Backlog status.
 * @return transaction reciept as JSON response.
 */
router.post('/updateBacklogStatus/:id/:status', function (req, res) {
    var retVal;
    var functionName = 'setBacklogStatus';
    var params = [req.params.id, req.params.status];
    W3JSR.prepareSignSend(DevAccInfo.Params.ABI,DevAccInfo.Params.ADDRESS,functionName,DevAccInfo.Params.ETHER_ACC,DevAccInfo.Params.ETHER_PKEY,params)
    .then((result,error) =>{
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    },(error) =>{
        console.log(error);
        retVal = {"Error":error};
        res.status(200).send(JSON.stringify(retVal));
    });
});

//Export the router to send the JSON response
module.exports = router;
