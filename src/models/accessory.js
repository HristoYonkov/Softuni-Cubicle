const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            // validator: /^http?/g
            validator: function() {
                return this.imageUrl.startsWith('http');
            },
            message: 'Image URL should be a link!'
        }
    },
    description: {
        type: String,
        required: true,
        maxLength: 120,
    },
    cubes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Cube'
        }
    ]

});

// accessorySchema.path('imageUrl').validate(function () {
//     return this.imageUrl.startsWith('http');
// }, 'Image URL should be a link!');

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;