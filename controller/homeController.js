'use strict';

exports.index = (req, res) => {
    res.sendfile('public/home.html');
};