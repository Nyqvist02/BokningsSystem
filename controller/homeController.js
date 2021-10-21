'use strict';

const userCheckFile = require('../scripts/check_user.js');
const dataUpdate = require('../scripts/dataUpdate.js');

exports.index = (req, res) => {
    res.sendfile('public/home.html');
};

exports.login = (req, res) => {

    const second = (answer) => {
        // console.log('4' + req.body.username);
        // console.log('5' + answer);

        if (answer == true) {
            res.sendfile('public/boka.html');
            console.log('Is logged in');

        }
        else {
            res.sendfile('public/home.html');
            //console.log('Is not logged in');
        }
    };
    
    userCheckFile.checkUser(req.body.username, second);
}

exports.boka = (req, res) => {
    console.log(req.query.dag);
    console.log(req.query.tid);
    console.log(req.query.token);
    dataUpdate.update(req.query.dag, req.query.tid, req.query.token);
    res.send();
}