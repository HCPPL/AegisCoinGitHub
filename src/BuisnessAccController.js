var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var BusinessAccInfo =  require('./BuisnessAccInfo');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var W3JSR = BusinessAccInfo.getWeb3R();

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
    W3JSR.prepareSignSend(BusinessAccInfo.Params.ABI, BusinessAccInfo.Params.ADDRESS, functionName, BusinessAccInfo.Params.ETHER_ACC,
        BusinessAccInfo.Params.ETHER_PKEY, params)
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