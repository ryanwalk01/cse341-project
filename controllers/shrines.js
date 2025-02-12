const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const allShrines = async (req, res) => {
    /*
    #swagger.summary = 'Get all shrines'
    */
    try {
        const result = await mongodb.getDb().db().collection('shrines').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

const getShrine = async (req, res) => {
    /*
    #swagger.summary = 'Get a shrine by ID'
    */
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid Shrine ID' });
        };
        const result = await mongodb.getDb().db().collection('shrines').findOne({ _id: new ObjectId(req.params.id) });
        if (!result) {
            return res.status(404).json({ message: 'Shrine not found' });
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error );
    }
};

const createShrine = async (req, res) => {
    /*
    #swagger.summary = 'Create a shrine'
    #swagger.parameters['shrine'] = {
        in: 'body',
        description: 'New shrine',
        required: true,
        type: 'object'
    }
    */
    try {
        const newShrine = req.body;
        const result = await mongodb.getDb().db().collection('shrines').insertOne(newShrine);
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error || 'An error occurred while creating the shrine');
    }
};

const updateShrine = async (req, res) => {
    /*
    #swagger.summary = 'Update a shrine'
    #swagger.parameters['shrine'] = {
        in: 'body',
        description: 'Update Shrine',
        required: true,
        type: 'object'
    }
    */
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid Shrine ID' });
        }
        const updatedShrine = req.body;
        const result = await mongodb.getDb().db().collection('shrines').updateOne({ _id: new ObjectId(req.params.id) }, { $set: updatedShrine });
        if (result.matchedCount == 0) {
            return res.status(404).json({ message: 'Shrine not found' });
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(204).json(result);
    } catch (error) {
        res.status(500).json(error || 'An error occurred while updating the shrine');
    }
};

const deleteShrine = async (req, res) => {
    /*
    #swagger.summary = 'Delete a shrine'
    */
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid Shrine ID' });
        }
        const result = await mongodb.getDb().db().collection('shrines').deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount == 0) {
            return res.status(404).json({ message: 'Shrine not found' });
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error || 'An error occurred while deleting the shrine' );
    }
};

module.exports = { allShrines, getShrine, createShrine, updateShrine, deleteShrine };
