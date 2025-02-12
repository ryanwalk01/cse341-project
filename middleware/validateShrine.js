const validator = require('../helpers/validate');

const shrine = (req, res, next) => {
    const validationRule = {
        'Shrine Name': 'required|string',
        'Lightroot Name': 'required|string',
        Title: 'required|string',
        Type: 'required|string',
        Location: 'required|string',
        Region: 'required|string',
        'Map Layer': 'required|string',
        'In Cave?': 'required|string',
        'Shrine Quest': 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = { shrine };