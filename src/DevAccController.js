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
    W3JSR.prepareSignSend(DevAccInfo.Params.ABI, DevAccInfo.Params.ADDRESS, functionName, DevAccInfo.Params.ETHER_ACC, 
        DevAccInfo.Params.ETHER_PKEY, params)
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
    W3JSR.prepareSignSend(DevAccInfo.Params.ABI, DevAccInfo.Params.ADDRESS, functionName, DevAccInfo.Params.ETHER_ACC,
        DevAccInfo.Params.ETHER_PKEY, params)
    .then((result,error) =>{
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    },(error) =>{
        console.log(error);
        retVal = {"Error":error};
        res.status(200).send(JSON.stringify(retVal));
    });
});

/**
 * Endpoint URL to POST transferOwnership(_address) function.
 * @author GayathrideviHashCode
 * @param  {string} newOwner  New Owner to be assigned.
 * @return transaction reciept as JSON response.
 */
router.post('/changeOwnerAddress/:newOwner', function (req, res) {
    var retVal;
    var functionName = 'transferOwnership';
    var params = [req.params.newOwner];
    W3JSR.prepareSignSend(DevAccInfo.Params.ABI, DevAccInfo.Params.ADDRESS, functionName, DevAccInfo.Params.ETHER_ACC,
        DevAccInfo.Params.ETHER_PKEY, params)
    .then((result,error) =>{
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    },(error) =>{
        console.log(error);
        retVal = {"Error":error};
        res.status(200).send(JSON.stringify(retVal));
    });
});

/**
 * Endpoint URL to POST updateDeveloperVoterPercentage(_devPercentage, _voterPercentage) function.
 * @author GayathrideviHashCode
 * @param  {string} devPct   Developer percentage to update.
 * @param  {string} votrPct  Voter percentage to update.
 * @return transaction reciept as JSON response.
 */
router.post('/updateDeveloperVoterPercentage/:devPct/:votrPct', function (req, res) {
    var retVal;
    var functionName = 'updateDeveloperVoterPercentage';
    var params = [req.params.devPct, req.params.votrPct];
    W3JSR.prepareSignSend(DevAccInfo.Params.ABI, DevAccInfo.Params.ADDRESS, functionName, DevAccInfo.Params.ETHER_ACC,
        DevAccInfo.Params.ETHER_PKEY, params)
    .then((result,error) =>{
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    },(error) =>{
        console.log(error);
        retVal = {"Error":error};
        res.status(200).send(JSON.stringify(retVal));
    });
});

/**
 * Endpoint URL to POST updateWinnersPercentage(_1stWinnerPercentae, _2ndWinnerPercentage, _3rdWinnerPercentage) function.
 * @author GayathrideviHashCode
 * @param  {string} IWinnerPct    First Winner percentage to update.
 * @param  {string} IIWinnerPct   Second Winner percentage to update.
 * @param  {string} IIIWinnerPct  Third Winner percentage to update.
 * @return transaction reciept as JSON response.
 */
router.post('/updateWinnersPercentage/:IWinnerPct/:IIWinnerPct/:IIIWinnerPct', function (req, res) {
    var retVal;
    var functionName = 'updateWinnersPercentage';
    var params = [req.params.IWinnerPct, req.params.IIWinnerPct, req.params.IIIWinnerPct];
    W3JSR.prepareSignSend(DevAccInfo.Params.ABI, DevAccInfo.Params.ADDRESS, functionName, DevAccInfo.Params.ETHER_ACC,
        DevAccInfo.Params.ETHER_PKEY, params)
    .then((result,error) =>{
        console.log(result);
        res.status(200).send(JSON.stringify(result));
    },(error) =>{
        console.log(error);
        retVal = {"Error":error};
        res.status(200).send(JSON.stringify(retVal));
    });
});

/**
 * Endpoint URL to GET getDeveloperAndVoterPercentage function
 * @author GayathrideviHashCode
 * @return Balance of given address as JSON response
 */
router.get('/getBalanceOf/:address', function (req, res) {
    var retVal;
    W3JSR.ContractInstance.methods.balanceOf(req.params.address).call().then(function(result){
        if(result){
            console.log("Balance of "+req.params.address+": ", result.valueOf());
            retVal = {"Balance":result.valueOf()};
            console.log(retVal);
            res.status(200).send(JSON.stringify(retVal));
        }
        else{
            retVal = {"Error":error};
            res.status(200).send(JSON.stringify(retVal));
        }
    });
});

//Export the router to send the JSON response
module.exports = router;
