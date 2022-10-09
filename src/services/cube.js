const fs = require('fs/promises');
const Cube = require('../models/cube');


exports.getOne = (cubeId) => Cube.findById(cubeId).lean();


exports.getAll = (search = '', fromImput, toInput) => {
    // const from = Number(fromImput) || 0;
    // const to = Number(toInput) || 6;

    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to)

    let cubes = Cube.find().lean();

    return cubes;
};

exports.create = (cube) => Cube.create(cube);