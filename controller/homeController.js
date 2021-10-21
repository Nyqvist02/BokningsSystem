'use strict';

const userCheckFile = require('../scripts/check_user.js');


exports.index = (req, res) => {
    res.sendfile('public/home.html');
};

exports.login = (req, res) => {

    const second = (answer) => {
        // console.log('4' + req.body.username);
        // console.log('5' + answer);

        if (answer == true) {
            res.send('You are logged in.');
            console.log('Is logged in');

        }
        else {
            res.sendfile('public/home.html');
            //console.log('Is not logged in');
        }
    };
    
    userCheckFile.checkUser(req.body.username, second);
}