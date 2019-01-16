var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var DevAccInfo =  require('./DevAccountInfo');

var jwt = require('jsonwebtoken'); 

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var W3JSR = DevAccInfo.getWeb3R();

var secretKey = 'superKey';

function verifyMyToken(token) {

    var value = false;
    console.log(token);

        // verifies secret and checks exp
        jwt.verify(token, secretKey, function(err, decoded) {       
            if (!err) {
                value = true;
            }
        });

    return value;
}

/**
 * Endpoint URL to POST addNewBacklog function
 * @author GayathrideviHashCode
 * @param  {number} id     Backlog Id to be added
 * @param  {number} token  Set the default Token value
 * @return transaction hash as JSON response
 */
router.post('/addBacklog/:id/:token/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {

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
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to POST deleteBacklog function
 * @author GagandeepHashCode
 * @param  {number} id     Backlog Id to be added
 * @return transaction hash as JSON response
 */
router.post('/deleteBacklog/:id/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        var functionName = 'deleteBacklog';
        var params = [req.params.id];
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
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to POST updateBacklogAmount function
 * @author GagandeepHashCode
 * @param  {number} id     Backlog Id to be added
 * @param  {number} token  Set the default Token value
 * @return transaction hash as JSON response
 */
router.post('/updateBacklogAmount/:id/:token/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        var functionName = 'updateBacklogAmount';
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
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to POST releaseTokensToWinnersForCompleteBacklog function
 * @author GagandeepHashCode
 * @param  {number} id           Backlog Id to be added
 * @param  {string} IWinner      address of first winner
 * @param  {string} IIWinner     address of second winner
 * @param  {string} IIIWinner    address of third winner
 * @param  {number} totalVoters  Set total voters
 * @return transaction hash as JSON response
 */
router.post('/releaseTokensToWinnersForCompleteBacklog/:id/:IWinner/:IIWinner/:IIIWinner/:totalVoters/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        var functionName = 'releaseTokensToWinnersForCompleteBacklog';
        var params = [req.params.id, req.params.IWinner, req.params.IIWinner, req.params.IIIWinner, req.params.totalVoters];
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
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to POST releaseTokensForVoters function
 * @author GagandeepHashCode
 * @param  {number} id      Backlog Id to be added
 * @param  {string} voters  Set array of voters
 * @return transaction hash as JSON response
 */
router.post('/releaseTokensForVoters/:id/:voters/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        var functionName = 'releaseTokensForVoters';
        // var params = [req.params.id, [req.params.voters].concat(req.params[0].split('/').slice(1))];
        var params = [req.params.id, req.params.voters.split(',')];

        console.log(params);
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
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to POST updateBacklogStatus function.
 * @author GayathrideviHashCode
 * @param  {number} id      Backlog Id to be added.
 * @return transaction reciept as JSON response.
 */
router.post('/updateBacklogStatus/:id/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        var functionName = 'updateBacklogStatus';
        var params = [req.params.id];
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
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

// /**
//  * Endpoint URL to POST transferOwnership(_address) function.
//  * @author GayathrideviHashCode
//  * @param  {string} newOwner  New Owner to be assigned.
//  * @return transaction reciept as JSON response.
//  */
// router.post('/changeOwnerAddress/:newOwner', function (req, res) {
//     var retVal;
//     var functionName = 'transferOwnership';
//     var params = [req.params.newOwner];
//     W3JSR.prepareSignSend(DevAccInfo.Params.ABI, DevAccInfo.Params.ADDRESS, functionName, DevAccInfo.Params.ETHER_ACC,
//         DevAccInfo.Params.ETHER_PKEY, params)
//     .then((result,error) =>{
//         console.log(result);
//         res.status(200).send(JSON.stringify(result));
//     },(error) =>{
//         console.log(error);
//         retVal = {"Error":error};
//         res.status(200).send(JSON.stringify(retVal));
//     });
// });

/**
 * Endpoint URL to POST updateDeveloperVoterPercentage(_devPercentage, _voterPercentage) function.
 * @author GayathrideviHashCode
 * @param  {number} devPct   Developer percentage to update.
 * @param  {number} votrPct  Voter percentage to update.
 * @return transaction reciept as JSON response.
 */
router.post('/updateDeveloperVoterPercentage/:devPct/:votrPct/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
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
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to POST updateWinnersPercentage(_1stWinnerPercentae, _2ndWinnerPercentage, _3rdWinnerPercentage) function.
 * @author GayathrideviHashCode
 * @param  {number} IWinnerPct    First Winner percentage to update.
 * @param  {number} IIWinnerPct   Second Winner percentage to update.
 * @param  {number} IIIWinnerPct  Third Winner percentage to update.
 * @return transaction reciept as JSON response.
 */
router.post('/updateWinnersPercentage/:IWinnerPct/:IIWinnerPct/:IIIWinnerPct/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
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
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to GET getDeveloperAndVoterPercentage function
 * @author GayathrideviHashCode
 * @return Developer and Voter percentage as JSON response
 */
router.get('/getDeveloperAndVoterPercentage/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        W3JSR.ContractInstance.methods.getDeveloperAndVoterPercentage().call().then(function(result){
            if(result){
                retVal = {"Result":result.valueOf()};
                console.log(retVal);
                res.status(200).send(JSON.stringify(retVal));
            }
            else{
                retVal = {"Error":error};
                res.status(200).send(JSON.stringify(retVal));
            }
        });
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to GET getWinnersPercentage function
 * @author GayathrideviHashCode
 * @return First three winner's percentage as JSON response
 */
router.get('/getWinnersPercentage/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        W3JSR.ContractInstance.methods.getWinnersPercentage().call().then(function(result){
            if(result){
                retVal = {"Result":result.valueOf()};
                console.log(retVal);
                res.status(200).send(JSON.stringify(retVal));
            }
            else{
                retVal = {"Error":error};
                res.status(200).send(JSON.stringify(retVal));
            }
        });
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to GET getBacklogStatus(_backlogId) function
 * @author GayathrideviHashCode
 * @param {number} id  Backlog Id to get it's Status
 * @return Backlog Id status as JSON response
 */
router.get('/getBacklogStatus/:id/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        W3JSR.ContractInstance.methods.getBacklogStatus(req.params.id).call().then(function(result){
            if(result){
                retVal = {"BacklogStatus":result.valueOf()};
                console.log(retVal);
                res.status(200).send(JSON.stringify(retVal));
            }
            else{
                retVal = {"Error":error};
                res.status(200).send(JSON.stringify(retVal));
            }
        });
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to GET getTotalReservedTokens function
 * @author GayathrideviHashCode
 * @return Total Reserved Tokens as JSON response
 */
router.get('/getTotalReservedTokens/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        W3JSR.ContractInstance.methods.getTotalReservedTokens().call().then(function(result){
            if(result){
                retVal = {"TotalReserved":result.valueOf()};
                console.log(retVal);
                res.status(200).send(JSON.stringify(retVal));
            }
            else{
                retVal = {"Error":error};
                res.status(200).send(JSON.stringify(retVal));
            }
        });

    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/**
 * Endpoint URL to GET getRemainingTokens function
 * @author GayathrideviHashCode
 * @return Remaining Tokens as JSON response
 */
router.get('/getRemainingTokens/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        W3JSR.ContractInstance.methods.getRemainingTokens().call().then(function(result){
            if(result){
                retVal = {"RemainingTokens":result.valueOf()};
                console.log(retVal);
                res.status(200).send(JSON.stringify(retVal));
            }
            else{
                retVal = {"Error":error};
                res.status(200).send(JSON.stringify(retVal));
            }
        });

    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

//Export the router to send the JSON response
module.exports = router;
