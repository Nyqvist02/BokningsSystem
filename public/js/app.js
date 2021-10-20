'use strict';


window.onload = () => {
const form1 = document.createElement('form');
form1.id = "formen";



const username = document.createElement("input");
username.setAttribute = ("type", "text");
username.setAttribute = ("placeholder", "Username");
username.setAttribute = ("name", "Username")
document.getElementById("formen").appendChild(username);

const login = document.createElement("input");
login.setAttribute = ("type", "submit");
login.setAttribute = ("value", "login");
document.getElementById("formen").appendChild(login);

document.getElementById("log").appendChild("formen");
}
