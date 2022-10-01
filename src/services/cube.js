const fs = require('fs/promises');
const cubes = require('../db.json');

exports.getOne = (cubeId) => cubes[cubeId];

exports.save = (cube) => {
    cubes.push({id: cubes[cubes.length - 1].id + 1, ...cube});

    let textData = JSON.stringify(cubes, '', 4);
    
    return fs.writeFile('./src/db.json', textData, {encoding: 'utf-8'});
}

