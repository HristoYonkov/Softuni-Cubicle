const Cube = require('../models/cube');
//const fs = require('fs/promises');


exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');


exports.getAll = (search = '', fromImput, toInput) => {
    // const from = Number(fromImput) || 0;
    // const to = Number(toInput) || 6;

    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to)

    let cubes = Cube.find();

    return cubes;
};

exports.create = (cube) => Cube.create(cube);