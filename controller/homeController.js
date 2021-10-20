'use strict';

exports.index = (req, res) => {
    res.sendfile('public/home.html');
};

exports.login = (req, res) => {
    res.send('You are loged in.');
}