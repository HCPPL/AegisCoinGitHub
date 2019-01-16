var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var AegisCoinInfo =  require('./AegisCoinInfo');

var jwt = require('jsonwebtoken'); 

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var W3JSR = AegisCoinInfo.getWeb3R();

var secretKey = 'superKey';

function verifyMyToken(token) {

    var value = false;
    // console.log(token);

        // verifies secret and checks exp
        jwt.verify(token,secretKey, function(err, decoded) {       
            if (!err) {
                value = true;
            }
        });

    return value;
}

/**
 * Endpoint URL to GET totalSupply function
 * @author GayathrideviHashCode
 * @return Total Supply as JSON response
 */
router.get('/getTotalSupply/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {

        W3JSR.ContractInstance.methods.totalSupply().call().then(function(result){
            if(result){
                console.log("Total Supply", result.valueOf());
                retVal = {"TotalSupply":result.valueOf()};
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
 * Endpoint URL to GET balanceOf(_address) function
 * @author GayathrideviHashCode
 * @param {string} address address for which Balance is to be obtained
 * @return Balance of given address as JSON response
 */
router.get('/getBalanceOf/:address/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {

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
        
    } else {
        res.json({ 
            success: false, 
            message: 'Failed to authenticate token.' 
        });
    }
});

/*
 * Endpoint URL to POST transfer function.
 * @author GagandeepHashCode
 * @param  {string} address  address of the recipent.
 * @param  {number} token    tokens to be sent.
 * @return transaction reciept as JSON response.
 */ 
router.post('/transfer/:address/:token/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {

        var functionName = 'transfer';
        var params = [req.params.address, req.params.token];
        W3JSR.prepareSignSend(AegisCoinInfo.Params.ABI, AegisCoinInfo.Params.ADDRESS, functionName, AegisCoinInfo.Params.ETHER_ACC,
            AegisCoinInfo.Params.ETHER_PKEY, params)
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
//     W3JSR.prepareSignSend(AegisCoinInfo.Params.ABI, AegisCoinInfo.Params.ADDRESS, functionName, AegisCoinInfo.Params.ETHER_ACC,
//         AegisCoinInfo.Params.ETHER_PKEY, params)
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
 * Endpoint URL to POST mintTokens function.
 * @author GayathrideviHashCode
 * @return transaction reciept as JSON response.
 */
router.post('/mintTokens/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
    
        var functionName = 'mintTokens';
        var params = [];
        W3JSR.prepareSignSend(AegisCoinInfo.Params.ABI, AegisCoinInfo.Params.ADDRESS, functionName, AegisCoinInfo.Params.ETHER_ACC,
            AegisCoinInfo.Params.ETHER_PKEY, params)
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
 * Endpoint URL to POST transferTokensFromBusiness function.
 * @author GayathrideviHashCode
 * @param {string} address  Address to which the token be transfered
 * @param {number} token    Number of tokens
 * @return transaction reciept as JSON response.
 */
router.post('/transferTokensFromBusiness/:address/:token/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
    
        var functionName = 'transferTokensFromBusiness';
        var params = [req.params.address, req.params.token];
        W3JSR.prepareSignSend(AegisCoinInfo.Params.ABI, AegisCoinInfo.Params.ADDRESS, functionName, AegisCoinInfo.Params.ETHER_ACC,
            AegisCoinInfo.Params.ETHER_PKEY, params)
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
 * Endpoint URL to POST transferTokensFromBusinessToDevelopment function.
 * @author GayathrideviHashCode
 * @param {number} token  Number of tokens to be transfered to development
 * @return transaction reciept as JSON response.
 */
router.post('/transferTokensFromBusinessToDevelopment/:token/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {

        var functionName = 'transferTokensFromBusinessToDevelopment';
        var params = [req.params.token];
        W3JSR.prepareSignSend(AegisCoinInfo.Params.ABI, AegisCoinInfo.Params.ADDRESS, functionName, AegisCoinInfo.Params.ETHER_ACC,
            AegisCoinInfo.Params.ETHER_PKEY, params)
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
 * Endpoint URL to POST transferTokensFromDevelopmentToBusiness function.
 * @author GayathrideviHashCode
 * @param {number} token  Number of tokens to be transfered to business
 * @return transaction reciept as JSON response.
 */
router.post('/transferTokensFromDevelopmentToBusiness/:token/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
    
        var functionName = 'transferTokensFromDevelopmentToBusiness';
        var params = [req.params.token];
        W3JSR.prepareSignSend(AegisCoinInfo.Params.ABI, AegisCoinInfo.Params.ADDRESS, functionName, AegisCoinInfo.Params.ETHER_ACC,
            AegisCoinInfo.Params.ETHER_PKEY, params)
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
 * Endpoint URL to POST updateDistributiveFiguresOfAccounts function.
 * @author GayathrideviHashCode
 * @param {number} devPct   Percentage of tokens for Deelopment Account
 * @param {number} busiPct  Percentage of tokens for Business Account
 * @return transaction reciept as JSON response.
 */
router.post('/updateDistributiveFiguresOfAccounts/:devPct/:busiPct/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
    
        var functionName = 'updateDistributiveFiguresOfAccounts';
        var params = [req.params.devPct, req.params.busiPct];
        W3JSR.prepareSignSend(AegisCoinInfo.Params.ABI, AegisCoinInfo.Params.ADDRESS, functionName, AegisCoinInfo.Params.ETHER_ACC,
            AegisCoinInfo.Params.ETHER_PKEY, params)
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
 * Endpoint URL to GET getSupplyPerDay function
 * @author GayathrideviHashCode
 * @return Supply per Day as JSON response
 */
router.get('/getSupplyPerDay/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        W3JSR.ContractInstance.methods.getSupplyPerDay().call().then(function(result){
            if(result){
                console.log("Supply per Day", result.valueOf());
                retVal = {"SupplyPerDay":result.valueOf()};
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
 * Endpoint URL to GET getPercentageForDevelopmentAndBusiness function
 * @author GayathrideviHashCode
 * @return Development and Business Account Token Percentage as JSON response
 */
router.get('/getPercentageForDevelopmentAndBusiness/:jwtToken', function (req, res) {
    var retVal;
    var token = req.params.jwtToken;
    var boolValue = verifyMyToken(token);

    if(boolValue == true) {
        W3JSR.ContractInstance.methods.getPercentageForDevelopmentAndBusiness().call().then(function(result){
            if(result){
                console.log("Development and Business Percentage", result.valueOf());
                retVal = {"DevBusiPct":result.valueOf()};
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
