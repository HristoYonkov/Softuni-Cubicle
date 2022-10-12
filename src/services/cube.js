const Cube = require('../models/cube');
//const fs = require('fs/promises');


exports.getOneDetailed = (cubeId) => Cube.findById(cubeId)
exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories'); //.populate('cubes')
// Nested population

// .populate({
//     path: accessories,
//     populate: {
//         path: 'cubes',
//         model: 'Cube'
//     }
// });


exports.getAll = async (search = '', fromImput, toInput) => {

    const from = Number(fromImput) || 0;
    const to = Number(toInput) || 6;

    let cubes = await Cube.find({ name: { $regex: new RegExp(search, 'i') }})
    .where('difficultyLevel').lte(to).gte(from).lean();

    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to)

    return cubes;
};

exports.create = (cube) => Cube.create(cube);