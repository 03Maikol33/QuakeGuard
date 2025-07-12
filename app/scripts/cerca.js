// Funzione che esegue il codice ogni volta che il valore viene cambiato
function checkMagnitudo() {
  var magnitudoInizio = document.getElementById("magnitudoPartenza").value;
  var magnitudoFine = document.getElementById("magnitudoFine").value;
    if(magnitudoInizio>magnitudoFine){
        sendNotification("Errore, la magnitudo massima è inferiore rispetto quella minima.",3000, "error");
        return 1;
    }
    return 0;
}

function checkDate() {
    var dataInizio = document.getElementById("giornoPartenza").value;
    var dataFine = document.getElementById("giornoFine").value;
    if(dataInizio>dataFine){
        alert("Errore, la data di inizio è successiva rispetto a quella di fine.");
        sendNotification("Errore, la data di inizio è successiva rispetto a quella di fine.",3000);
        return 1;
    }
    if(dataInizio == dataFine){
        alert("Errore, la data di inizio è uguale a quella di fine.");
        sendNotification("Errore, la data di inizio è uguale a quella di fine.",3000);
        return 1;
    }
    return 0;
}
//Script per impostare le date di default

      var date = new Date();
      date.setDate(date.getDate() - 1);
      var dateString = date.toISOString().split('T')[0];
      document.getElementById('giornoPartenza').value = dateString;
      date = new Date();
      dateString = date.toISOString().split('T')[0];
      document.getElementById('giornoFine').value = dateString;

      function cerca(){
        var tg = document.getElementById("searchedQuakesList");
        tg.innerHTML = "";
        if(checkMagnitudo() || checkDate())return;
        var dataInizio = document.getElementById("giornoPartenza").value;
        var dataFine = document.getElementById("giornoFine").value;
        var magnitudoInizio = document.getElementById("magnitudoPartenza").value;
        var magnitudoFine = document.getElementById("magnitudoFine").value;

        var startTime = dataInizio + "T00:00:00";
        var endTime = dataFine + "T23:59:59";

        var url = `https://webservices.ingv.it/fdsnws/event/1/query?limit=200&orderby=time&format=xml&starttime=${startTime}&endtime=${endTime}&minmag=${magnitudoInizio}&maxmag=${magnitudoFine}`;
        console.log(url);
        fetch(url)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, "text/xml");
          const events = xmlDoc.getElementsByTagName("event");
          for (let i = 0; i < events.length; i++) {
            const earthquakeDiv = createEarthquakeElement(events[i],"searchList");
            tg.appendChild(earthquakeDiv);
          }
          changeTheme();
        });

      }