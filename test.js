'use strict';

const fs = require('fs');

fs.readFile('./Data/tider.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    const Duck = JSON.parse(data);
    console.log(Duck.Vecka[1][2]);
    // console.log(Duck);
});

