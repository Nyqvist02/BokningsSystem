'use strict';

const userCheck = require('../scripts/check_user.js');


exports.index = (req, res) => {
    res.sendfile('public/home.html');
};

exports.login = async (req, res) => {
    

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
    
    userCheck.checkUser(req.body.username, second);   
}