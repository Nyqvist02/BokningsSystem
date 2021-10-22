'use strict';

const getTiderFile = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/js/tider.json');
    xhr.responseType = 'json';
    xhr.send();




    xhr.onload = () => {

        const dataTider = xhr.response;

        document.getElementById("welcomeTitle").textContent = "Välkommen " + document.cookie;

        const visaTider = document.getElementById("visaTider");

        

        const updateBookings = () => {

            const dagContent = document.createElement('dd'); //Skapar row för knappar och dagtitel
            dagContent.id = 'tiderTitel';
            dagContent.className = 'row justify-content-start';
            document.getElementById("schema").appendChild(dagContent);

            const extraTid = document.createElement('h4'); //Lägger till de 4 olika tider möjliga för bokning
            extraTid.className = "col-2 text-center";
            document.getElementById("tiderTitel").appendChild(extraTid);

            for(let i = 0; i < dataTider.vecka[0].times.length; i++){
                const tiderCols = document.createElement('h4'); //Lägger till de 4 olika tider möjliga för bokning
                tiderCols.className = "col-2 text-center";
                tiderCols.textContent = dataTider.vecka[0].times[i].time;
                document.getElementById("tiderTitel").appendChild(tiderCols);
            }
            
            for (let i = 0; i < dataTider.vecka.length; i++) {
                // const dag = document.createElement('dl'); //Lägger till Dag "row"
                // dag.id = 'dag' + i;
                // dag.className = 'd-flex-row justify-content-start';
                // document.getElementById('schema').appendChild(dag);
        
                // const dagTitel = document.createElement('dt'); //Lägger till sid-titeln "Dag i" för row
                // dagTitel.className = 'col-1';
                // dagTitel.textContent = 'Dag ' + (i + 1);
                // document.getElementById('dag' + i).appendChild(dagTitel);
        
                const dagContent = document.createElement('dd'); //Skapar row för knappar och dagtitel
                dagContent.id = 'content' + i;
                dagContent.className = 'row justify-content-start';
                document.getElementById("schema").appendChild(dagContent);

                const rowTitel = document.createElement('p'); //Lägger till dagtitel med data från tider.json (se fil)
                // rowTitel.id = "dag" + i;
                rowTitel.className = "col-2 p-2 text-center";
                rowTitel.textContent = dataTider.vecka[i].day;
                document.getElementById('content' + i).appendChild(rowTitel);


        
                for (let j = 0; j < dataTider.vecka[i].times.length; j++) { //Lägger till knapparna baserat på tider.json värdena



                    if (dataTider.vecka[i].times[j].bokad == 'ej bokad') {
        
                        const knapp = document.createElement('button')
                        knapp.id = 'dag=' + i + '&tid=' + j;
                        knapp.className = 'col-2 button btn-primary';
                        knapp.textContent = 'Ledig';
        
                        knapp.addEventListener('click', boka);
        
                        document.getElementById('content' + i).appendChild(knapp);
        
                    } else if (dataTider.vecka[i].times[j].bokad == document.cookie) {
        
                        const knapp = document.createElement('button')
                        knapp.id = 'dag=' + i + '&tid=' + j;
                        knapp.className = 'col-2 button btn-success';

                        knapp.textContent = 'Bokad';

                        knapp.addEventListener('click', avboka);



                        document.getElementById('content' + i).appendChild(knapp);
        
                    } else {
        
                        const knapp = document.createElement('button')
                        knapp.id = 'dag=' + i + '&tid=' + j;
                        knapp.className = 'col-2 button btn-warning';
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

const avboka = (event) => {
    const id = event.target.id;
    const token = 'token=' + 'ej bokad';
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