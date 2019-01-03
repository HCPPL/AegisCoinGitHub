var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var AegisCoinInfo =  require('./AegisCoinInfo');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var W3JSR = AegisCoinInfo.getWeb3R();

/**
 * Endpoint URL to GET totalSupply function
 * @author GayathrideviHashCode
 * @return Total Supply as JSON response
 */
router.get('/getTotalSupply', function (req, res) {
    var retVal;
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
});

/**
 * Endpoint URL to GET balanceOf(_address) function
 * @author GayathrideviHashCode
 * @param {string} address address for which Balance is to be obtained
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

/*
 * Endpoint URL to POST transfer function.
 * @author GagandeepHashCode
 * @param  {string} address  address of the recipent.
 * @param  {number} token    tokens to be sent.
 * @return transaction reciept as JSON response.
 */ 
router.post('/transfer/:address/:token', function (req, res) {
    var retVal;
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
router.post('/mintTokens/:days', function (req, res) {
    var retVal;
    var functionName = 'mintTokens';
    var params = [req.params.days];
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
});

/**
 * Endpoint URL to POST transferTokensFromBusiness function.
 * @author GayathrideviHashCode
 * @param {string} address  Address to which the token be transfered
 * @param {number} token    Number of tokens
 * @return transaction reciept as JSON response.
 */
router.post('/transferTokensFromBusiness/:address/:token', function (req, res) {
    var retVal;
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
});

/**
 * Endpoint URL to POST transferTokensFromBusinessToDevelopment function.
 * @author GayathrideviHashCode
 * @param {number} token  Number of tokens to be transfered to development
 * @return transaction reciept as JSON response.
 */
router.post('/transferTokensFromBusinessToDevelopment/:token', function (req, res) {
    var retVal;
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
});

/**
 * Endpoint URL to POST transferTokensFromDevelopmentToBusiness function.
 * @author GayathrideviHashCode
 * @param {number} token  Number of tokens to be transfered to business
 * @return transaction reciept as JSON response.
 */
router.post('/transferTokensFromDevelopmentToBusiness/:token', function (req, res) {
    var retVal;
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
});

/**
 * Endpoint URL to POST updateDistributiveFiguresOfAccounts function.
 * @author GayathrideviHashCode
 * @param {number} devPct   Percentage of tokens for Deelopment Account
 * @param {number} busiPct  Percentage of tokens for Business Account
 * @return transaction reciept as JSON response.
 */
router.post('/updateDistributiveFiguresOfAccounts/:devPct/:busiPct', function (req, res) {
    var retVal;
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
});

/**
 * Endpoint URL to GET getSupplyPerDay function
 * @author GayathrideviHashCode
 * @return Supply per Day as JSON response
 */
router.get('/getSupplyPerDay', function (req, res) {
    var retVal;
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
});

/**
 * Endpoint URL to GET getPercentageForDevelopmentAndBusiness function
 * @author GayathrideviHashCode
 * @return Development and Business Account Token Percentage as JSON response
 */
router.get('/getPercentageForDevelopmentAndBusiness', function (req, res) {
    var retVal;
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
});
//Export the router to send the JSON response
module.exports = router;
