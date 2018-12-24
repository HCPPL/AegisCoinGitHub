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

/**
 * Endpoint URL to POST transferOwnership function.
 * @author GayathrideviHashCode
 * @param  {string} newOwner  Backlog Id to be added.
 * @return transaction reciept as JSON response.
 */
router.post('/changeOwnerAddress/:newOwner', function (req, res) {
    var retVal;
    var functionName = 'transferOwnership';
    var params = [req.params.newOwner];
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

//Export the router to send the JSON response
module.exports = router;
