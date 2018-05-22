'use strict';
// Import our mocked Data
var mobileMocks = require( '../mobileMocks');

// Create a controller where receive the request an executes the res callback
function getMobiles (req, res) {
    res.status(200).send({mobile: mobileMocks.allMobiles});
}

function getMobile (req, res) {
    var id = req.params.id;
    var mobile = {};

    switch (id) {
        case '1':
            mobile = mobileMocks.allMobiles[0];
            break;
        case '2':
            mobile = mobileMocks.allMobiles[1];
            break;
        case '3':
            mobile = mobileMocks.allMobiles[2];
            break;
        default:
            mobile = 'Error';
        break;
    }
    res.status(200).send({mobile: mobile});
}

module.exports={
    getMobile,
    getMobiles
};
