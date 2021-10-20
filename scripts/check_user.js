'use strict';

const fs = require('fs');

// Creation funktion
const checkUser = (User) => {
    // Return value 
    let svar = false;

    // Reding Data
    fs.readFile('./Data/users.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // console.log(data);
        // console.log(JSON.parse(data));

        // Formating data
        const Duck = JSON.parse(data);

        // comparing 
        Duck.users.forEach(person => {
            if (person == User) {
                // console.log('Found: ' + User);
                svar = true;
            };
        });
    });

    // Returning false if user is not in data 
    // If in data return true
    return svar;
};

// checkUser('Kalle');