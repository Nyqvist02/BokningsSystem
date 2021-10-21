'use strict';

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

const saveToken = () => { //Saves username as a token that will be used as verification
    document.cookie = document.getElementById("username").value;
    console.log(document.cookie);
}