const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const allTowers = async (req, res) => {
    /*
    #swagger.summary = 'Get all towers'
    */
    try {
        const result = await mongodb.getDb().db().collection('towers').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

const getTower = async (req, res) => {
    /*
    #swagger.summary = 'Get a tower by ID'
    */
    try {
        const result = await mongodb.getDb().db().collection('towers').findOne({ _id: new ObjectId(req.params.id) });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createTower = async (req, res) => {
    /*
    #swagger.summary = 'Create a tower'
    #swagger.parameters['tower'] = {
        in: 'body',
        description: 'New tower',
        required: true,
        type: 'object'
    }
    */
    try {
        const result = await mongodb.getDb().db().collection('towers').insertOne(req.body);
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateTower = async (req, res) => {
    /*
    #swagger.summary = 'Update a tower'
    #swagger.parameters['tower'] = {
        in: 'body',
        description: 'Update Tower',
        required: true,
        type: 'object'
    }
    */
    try {
        const updatedTower = req.body;
        const result = await mongodb.getDb().db().collection('shrines').updateOne({ _id: new ObjectId(req.params.id) }, { $set: updatedTower });
        res.setHeader('Content-Type', 'application/json');
        res.status(204).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteTower = async (req, res) => {
    /*
    #swagger.summary = 'Delete a tower'
    */
    try {
        const result = await mongodb.getDb().db().collection('towers').deleteOne({ _id: new ObjectId(req.params.id) });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { allTowers, getTower, createTower, updateTower, deleteTower };
