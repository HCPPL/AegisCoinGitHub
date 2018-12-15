var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var AegisCoinInfo =  require('./AegisCoinInfo');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var W3JSR = AegisCoinInfo.getWeb3R();

/**
 * Endpoint URL to GET getDevelopmentAccBalance function
 * @author GayathrideviHashCode
 * @return account balance as JSON response
 */
router.get('/getDevelopmentAccBalance', function (req, res) {
    var retVal;
    W3JSR.ContractInstance.methods.getDevelopmentAccBalance().call().then(function(result){
        if(result){
            //console.log("getDevelopmentAccBalance", result.valueOf());
            retVal = {"DevelopmentAccBalance":result.valueOf()};
            //console.log(retVal);
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
