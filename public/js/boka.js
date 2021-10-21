'use strict';
console.log('Hi');

const xhr = new XMLHttpRequest();
xhr.open('GET', '/js/tider.json');
xhr.responseType = 'json';
xhr.send();


xhr.onload = () => {
    console.log('Hi');
    const dataTider = xhr.response;

    document.getElementById('welcomeTitle').textContent = 'Välkommen ' + document.cookie;

    for (let i = 0; i < dataTider.vecka.length; i++) {
        console.log('Hi Cool');
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

        for (let j = 0; j < dataTider.vecka[i].length; j++) {
            if (dataTider.vecka[i][j] == 'ej bokad') {

                const knapp = document.createElement('button')
                knapp.id = i + '-' + j;
                knapp.className = 'button btn-primary p-2';
                knapp.textContent = 'Ledig';
                document.getElementById('content' + i).appendChild(knapp);
            } else if (dataTider.vecka[i][j] == document.cookie) {

                const knapp = document.createElement('button')
                knapp.id = i + '-' + j;
                knapp.className = 'button btn-success p-2';
                knapp.textContent = 'Bokad';
                document.getElementById('content' + i).appendChild(knapp);

            } else {

                const knapp = document.createElement('button')
                knapp.id = i + '-' + j;
                knapp.className = 'button btn-warning p-2';
                knapp.textContent = 'Ej Ledig';
                document.getElementById('content' + i).appendChild(knapp);
            }
        }
    }
}