const User = require('../models/User');

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.register = async ({username, password, repeatPassword}) => {
    //TODO: Return form validation message
    if (password !== repeatPassword) {
        return false;
    }

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdUser = await User.create({
        username,
        password: hashedPassword
    });

    return createdUser;
}
