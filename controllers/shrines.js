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
        const result = await mongodb.getDb().db().collection('shrines').findOne({ _id: ObjectId(req.params.id) });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
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
        const result = await mongodb.getDb().db().collection('shrines').insertOne(req.body);
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error);
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
        const updatedShrine = req.body;
        const result = await mongodb.getDb().db().collection('shrines').updateOne({ _id: ObjectId(req.params.id) }, { $set: updatedShrine });
        res.setHeader('Content-Type', 'application/json');
        res.status(204).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteShrine = async (req, res) => {
    /*
    #swagger.summary = 'Delete a shrine'
    */
    try {
        const result = await mongodb.getDb().db().collection('shrines').deleteOne({ _id: ObjectId(req.params.id) });
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { allShrines, getShrine, createShrine, updateShrine, deleteShrine };
