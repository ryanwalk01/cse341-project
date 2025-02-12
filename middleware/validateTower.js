const validator = require('../helpers/validate');

const tower = (req, res, next) => {
    const validationRule = {
        'Name': 'required|string',
        'Region': 'required|string',
        'Coordinates': 'required|string',
        'Launch distance': 'required|string'
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

module.exports = { tower };