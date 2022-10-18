const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret = 'asdohjaksjdhxmijhfsciufxmgasildailujhmlcxihjb';
const saltRounds = 10;

exports.register = async ({username, password, repeatPassword}) => {
    //TODO: Return form validation message
    if (password !== repeatPassword) {
        return false;
    }

    let hashedPassword = await bcrypt.hash(password, saltRounds);

    let createdUser = User.create({
        username,
        password: hashedPassword
    });

    // let createdUser = new User({             // Second way to create user in database, helps for more dynamic settings with new user properties
    //     username,
    //     password: hashedPassword
    // });

    // createdUser.save();

    return createdUser;
}

exports.login = async ({username, password}) => {
    let user = await User.findOne({username});

    if (!user) {
        //TODO : add a message
        return;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return;
    }

    let result = new Promise((resolve, reject) => {
        jwt.sign({_id: user._id, username: user.username}, secret, {expiresIn: '2d'}, (err, token) => {
            if (err) {
                reject(err);
            }
            
            resolve(token);
        });
    })

    return result

}
