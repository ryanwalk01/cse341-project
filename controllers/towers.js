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
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid Tower ID' });
        }
        const result = await mongodb.getDb().db().collection('towers').findOne({ _id: new ObjectId(req.params.id) });
        if (!result) {
            return res.status(404).json({ message: 'Tower not found' });
        };
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
        res.status(500).json(error || 'An error occurred while creating the tower');
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
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid Tower ID' });
        }
        const updatedTower = req.body;
        const result = await mongodb.getDb().db().collection('shrines').updateOne({ _id: new ObjectId(req.params.id) }, { $set: updatedTower });
        if (result.matchedCount == 0) {
            return res.status(404).json({ message: 'Tower not found' });
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(204).json(result);
    } catch (error) {
        res.status(500).json(error || 'An error occurred while updating the tower');
    }
};

const deleteTower = async (req, res) => {
    /*
    #swagger.summary = 'Delete a tower'
    */
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid Tower ID' });
        };
        const result = await mongodb.getDb().db().collection('towers').deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount == 0) {
            return res.status(404).json({ message: 'Tower not found' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error || 'An error occurred while deleting the tower');
    }
};

module.exports = { allTowers, getTower, createTower, updateTower, deleteTower };
