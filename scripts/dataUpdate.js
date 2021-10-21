'use strict';

const fs = require('fs');

exports.update = (dag, tid, token) =>{
    


    fs.readFile('./public/js/tider.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        
        let Duck = JSON.parse(data);

        Duck.vecka[dag][tid] = token;

        const DuckJson = JSON.stringify(Duck);

        fs.writeFile('./public/js/tider.json', DuckJson, (err) =>{
            if (err) throw err;
            console.log('File has been updated!');
        });
    });
}