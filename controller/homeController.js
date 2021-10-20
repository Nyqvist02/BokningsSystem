'use strict';

const userCheck = require('../scripts/check_user');

exports.index = (req, res) => {
    res.sendfile('public/home.html');
};

exports.login = (req, res) => {
    const anser = userCheck.checkUser(req.forms.username);

    if (anser) {
        res.send('You are loged in.');
    }
    else {
        res.sendfile('public/home.html');
    }
}