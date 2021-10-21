'use strict';

console.log('Hi');

const getTiderFile = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/js/tider.json');
    xhr.responseType = 'json';
    xhr.send();




    xhr.onload = () => {

        const dataTider = xhr.response;

        document.getElementById('welcomeTitle').textContent = 'Välkommen ' + document.cookie;

        

        const updateBookings = () => {
            for (let i = 0; i < dataTider.vecka.length; i++) {
                const dag = document.createElement('dl'); //Lägger till Dag "row"
                dag.id = 'dag' + i;
                dag.className = 'd-flex flex-row justify-content-center';
                document.getElementById('schema').appendChild(dag);
        
                const dagTitel = document.createElement('dt'); //Lägger till sid-titeln "Dag i" för row
                dagTitel.className = 'col-1';
                dagTitel.textContent = 'Dag ' + (i + 1);
                document.getElementById('dag' + i).appendChild(dagTitel);
        
                const dagContent = document.createElement('dd');
                dagContent.id = 'content' + i;
                dagContent.className = 'col-6';
                document.getElementById('dag' + i).appendChild(dagContent);
        
                for (let j = 0; j < dataTider.vecka[i].length; j++) { //Lägger till knapparna baserat på tider.json värdena
                    if (dataTider.vecka[i][j] == 'ej bokad') {
        
                        const knapp = document.createElement('button')
                        knapp.id = 'dag=' + i + '&tid=' + j;
                        knapp.className = 'button btn-primary p-2';
                        knapp.textContent = 'Ledig';
        
                        knapp.addEventListener('click', boka);
        
                        document.getElementById('content' + i).appendChild(knapp);
        
                    } else if (dataTider.vecka[i][j] == document.cookie) {
        
                        const knapp = document.createElement('button')
                        knapp.id = 'dag=' + i + '&tid=' + j;
                        knapp.className = 'button btn-success p-2';
                        knapp.textContent = 'Bokad';
                        document.getElementById('content' + i).appendChild(knapp);
        
                    } else {
        
                        const knapp = document.createElement('button')
                        knapp.id = 'dag=' + i + '&tid=' + j;
                        knapp.className = 'button btn-warning p-2';
                        knapp.textContent = 'Ej Ledig';
                        document.getElementById('content' + i).appendChild(knapp);
                    }
                }
            }
        }

        updateBookings();


    }

}

const boka = (event) => {
    const id = event.target.id;
    const token = 'token=' + document.cookie;
    const url = '/boka/?' + id + '&' + token;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        const schemaTag = document.getElementById('schema')

        while(schemaTag.firstChild){
            schemaTag.removeChild(schemaTag.lastChild);
        }

        getTiderFile();
    }

}

getTiderFile();