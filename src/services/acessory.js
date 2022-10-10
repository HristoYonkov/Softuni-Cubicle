const Accessory = require('../models/accessory');

exports.create = (accessory) => Accessory.create(accessory);

exports.getAll = () => Accessory.find();

exports.getOne = (id) => Accessory.findById(id);