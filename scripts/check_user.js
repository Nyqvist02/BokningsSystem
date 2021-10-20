'use strict';

const fs = require('fs');

// Creation funktion
const checkUser = (User, callback) => {
    // Return value 
    let svar = false;

    // console.log('1,Starting compare');
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
        
        // console.log('2,comparing');

        // comparing 
        Duck.users.forEach(person => {
            if (person == User) {
                // console.log('Found: ' + User);
                svar = true;
            };
        });
        // console.log('3,Ending compare');
        callback(svar);
    });
    




    // Returning false if user is not in data 
    // If in data return true
    
};

module.exports = {
    checkUser
};


// checkUser('Kalle');