const Accessory = require('../models/accessory');

exports.create = (accessory) => Accessory.create(accessory);

exports.getAllWithout = (ids) => Accessory.find({_id: {$nin: ids}});

exports.getOne = (id) => Accessory.findById(id);