<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="css/general.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v7.4.0/ol.css">
    <title>L'ho avvertito</title>
</head>
<style>
    body{
        background-image: url(resources/texture/dark_black.png);
        font-family: nunito, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
    }
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
    h1,h2,h3,h4{
        text-align: center;
    }

    /*Per il pulsante si e no*/
    .toggle-button-cover {
  display: table-cell;
  position: relative;
  width: 200px;
  height: 140px;
  box-sizing: border-box;
}

.button-cover {
  height: 100px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 10px 20px -8px #c5d6d6;
  border-radius: 5px;
}

.button-cover:before {
  counter-increment: button-counter;
  content: counter(button-counter);
  position: absolute;
  right: 0;
  bottom: 0;
  color: #d7e3e3;
  font-size: 12px;
  line-height: 1;
  padding: 5px;
}

.button-cover,
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 74px;
  height: 36px;
  margin: -20px auto 0 auto;
  overflow: hidden;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
  background-image: url(resources/texture/light_black.png);
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  z-index: 1;
}

.button.r,
.button.r .layer {
  border-radius: 5px;
}

#button-3 .knobs:before {
  content: "SI";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: green;
  border-radius: 5px;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

#button-3 .checkbox:active + .knobs:before {
  width: 46px;
  border-radius: 5px;
}

#button-3 .checkbox:checked:active + .knobs:before {
  margin-left: -26px;
}

#button-3 .checkbox:checked + .knobs:before {
  content: "NO";
  left: 42px;
  background-color: red;
}

#button-3 .checkbox:checked ~ .layer {
  background-color: #fcebeb;
  background-image: url(resources/texture/light_black.png);
}
/*Fine si e no*/
/*valuta intensità*/
.radio-input input {
  display: none;
}

.radio-input {
  --container_width: 300px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  background-image: url(resources/texture/light_black.png);
  color: #000000;
  width: var(--container_width);
  overflow: hidden;
  border: 1px solid rgba(53, 52, 52, 0.226);
}


.radio-input label {
  width: 100%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-weight: 600;
  letter-spacing: -1px;
  font-size: 14px;
}

.selection {
  display: none;
  position: absolute;
  height: 100%;
  width: calc(var(--container_width) / 10);
  z-index: 0;
  left: 0;
  top: 0;
  transition: .15s ease;
}

.radio-input label:has(input:checked) {
  color: #fff;
}

.radio-input label:has(input:checked) ~ .selection {
  background-color: green;
  display: inline-block;
}


.radio-input label:nth-child(1),.radio-input label:nth-child(2){
  color: green;
}
.radio-input label:nth-child(3),.radio-input label:nth-child(4){
  color: rgb(225, 225, 9);
}

.radio-input label:nth-child(5),.radio-input label:nth-child(6){
  color: orange;
}

.radio-input label:nth-child(7),.radio-input label:nth-child(8){
  color: red;
}

.radio-input label:nth-child(9),.radio-input label:nth-child(10){
  color: purple;
}

.radio-input label:nth-child(1):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 0/10));
}

.radio-input label:nth-child(2):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 1/10));
}

.radio-input label:nth-child(3):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 2/10));
}

.radio-input label:nth-child(4):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 3/10));
}
.radio-input label:nth-child(5):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 4/10));
}
.radio-input label:nth-child(6):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 5/10));
}
.radio-input label:nth-child(7):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 6/10));
}
.radio-input label:nth-child(8):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 7/10));
}
.radio-input label:nth-child(9):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 8/10));
}
.radio-input label:nth-child(10):has(input:checked) ~ .selection {
  transform: translateX(calc(var(--container_width) * 9/10));
}
/*fine valuta intensità*/

.search{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.search>select,.search>input{
  background-image: url(resources/texture/light_black.png);
    text-align: center;
    color: white;
    --webkit-appearance: none;
    margin-bottom: 50px;
    padding: 15px;
    border-radius: 5px;
    font-family: nunito,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.earthquake-container{
    background-color: black;
    min-height: 50px;
    width: 97%;
    color: white;
    background-image: url(resources/texture/light_black.png);
    border-radius: 5px;
    margin-top: 50px;
}
.earthquake-container>p{
    text-align: center;
    width: 100%;
}
</style>
<body>
        <div class="earthquake-container">
            <h2 id="titolo"></h2>
            <p id="magnitudo"></p>
            <p id="profondita"></p>
            <p id="dataOra"></p>
            <p id="segnalazioni"></p>
        </div>
        <input type="text" name="eventId" id="eventId" readonly style="display: none;">
        <!-- Container per il grafico a barre -->
        <canvas id="intensitaChart" width="400" height="200"></canvas>
        <script>
// Numero totale di segnalazioni
document.getElementById('segnalazioni').innerText = "Il terremoto è stato avvertito da <?php echo $total_segnalazioni; ?> persone.";

// Dati per il grafico
var intensitaData = <?php echo json_encode(array_values($intensita_data)); ?>;
/*
// Creazione del grafico a barre con Chart.js
var ctx = document.getElementById('intensitaChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // Intensità da 1 a 10
        datasets: [{
            label: 'Numero di segnalazioni per intensità',
            data: intensitaData, // Dati dinamici dal PHP
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1 // Il numero di persone deve essere intero
                }
            }
        }
    }
});*/
</script>
<?php
// Connessione al database
$conn = new mysqli("localhost", "quakeguard", "", "my_quakeguard");

// Verifica della connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Ottenere l'eventId dall'input nascosto o tramite GET
$eventId = isset($_GET['eventId']) ? $_GET['eventId'] : "";

// Recuperare i dati del terremoto dal database
if ($eventId != "") {
    // Query per contare il numero totale di segnalazioni
    $sql_totale = "SELECT COUNT(*) as total_segnalazioni FROM terremoti WHERE idTerremoto = ?";
    $stmt_totale = $conn->prepare($sql_totale);
    $stmt_totale->bind_param("s", $eventId);
    $stmt_totale->execute();
    $stmt_totale->bind_result($total_segnalazioni);
    $stmt_totale->fetch();
    $stmt_totale->close();

    // Query per ottenere il numero di segnalazioni per ciascuna intensità (da 1 a 10)
    $sql_intensita = "SELECT intensita, COUNT(*) as count FROM terremoti WHERE idTerremoto = ? GROUP BY intensita ORDER BY intensita";
    $stmt_intensita = $conn->prepare($sql_intensita);
    $stmt_intensita->bind_param("s", $eventId);
    $stmt_intensita->execute();
    $result = $stmt_intensita->get_result();

    // Array per memorizzare i risultati per il grafico
    $intensita_data = array_fill(1, 10, 0); // Inizializza array per le intensità da 1 a 10
    while ($row = $result->fetch_assoc()) {
        $intensita_data[$row['intensita']] = $row['count'];
    }

    $stmt_intensita->close();
} else {
    echo "<p>Nessun Event ID fornito.</p>";
}

// Chiudere la connessione
$conn->close();
?>

    <script>

        //estrai le informazioni dall'url
        const urlParams = new URLSearchParams(window.location.search);
        const idTerremoto = urlParams.get('eventId');
        document.getElementById('eventId').value=idTerremoto;

    </script>
    <!--SCRIPT-->
    <script src="https://cdn.jsdelivr.net/npm/ol@v7.4.0/dist/ol.js"></script>
<script>

function formatDate(date) {
      const currentDate = new Date().toDateString();
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (date.toDateString() === currentDate) {
        return 'oggi';
      } else if (date.toDateString() === yesterday.toDateString()) {
        return 'ieri';
      } else {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
      }
    }

    function formatDateTime(dateTime) {
      const date = new Date(dateTime);
      const formattedDate = formatDate(date);
      let k=0;
      isDaylightSavingTime(date) ? k=2 : k=1;//aggiunge 2 se siamo in ora legale, 1 in ora solare
      const hours = parseInt(date.getHours().toString().padStart(2, '0'))+k;//non so il perchè ma si deve aggiungere 2 all'ora pk la query ingv da un risultato sbagliato
      const minutes = date.getMinutes().toString().padStart(2, '0');

      return `${formattedDate} alle ${hours}:${minutes}`;
    }

    //torna vero se siamo nell'ora legale
    function isDaylightSavingTime(date) {
      var jan = new Date(date.getFullYear(), 0, 1);
      var jul = new Date(date.getFullYear(), 6, 1);
      var stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
      return date.getTimezoneOffset() < stdTimezoneOffset;
    }

    //crea l'url per la fetch
    const url = "https://webservices.ingv.it/fdsnws/event/1/query?eventid="+idTerremoto+"&format=xml";
    console.log(url);
    var event;
    fetch(url)
        .then(response => response.text())
        .then(data => {

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, "text/xml");
          const events = xmlDoc.getElementsByTagName("event");

          if (events.length === 0) {
            alert("Errore. Il link non è valido o il terremoto non esiste più");
            return;
          }
          event = events[0];
          console.log(event);
          ottieniInfo(event);

        })
        .catch(error => {
          console.log(error);
        });
        function ottieniInfo(event){
          console.log(event);
          const description = event.getElementsByTagName("description")[0];
          const magnitude = event.getElementsByTagName("magnitude")[0];
          const origin = event.getElementsByTagName("origin")[0];

          const time = formatDateTime(origin.getElementsByTagName("value")[0].textContent);
          const place = description.getElementsByTagName("text")[0].textContent;
          const depth = Math.round(origin.getElementsByTagName("depth")[0].getElementsByTagName("value")[0].textContent/1000);
          const magnitudeValue = parseFloat(magnitude.getElementsByTagName("value")[0].textContent);
          const latitudeElement = event.querySelector('latitude > value');
          const longitudeElement = event.querySelector('longitude > value');
          let latitude = latitudeElement ? latitudeElement.textContent : null;
          let longitude = longitudeElement ? longitudeElement.textContent : null;
              document.getElementById('titolo').innerHTML=place;
              document.getElementById('magnitudo').innerHTML="<div style='display:flex; flex-direction:row; justify-content: center; align-items:center;'>Magnitudo: <div id='mgDisplay' style='border: 0.5px solid white; border-radius:5px; padding:3px; padding-left:6px; padding-right:6px; margin:5px;'>"+magnitudeValue+"</div>ML</div>";
              document.getElementById('profondita').innerHTML="Profondità: "+depth+"km";
              document.getElementById('dataOra').innerHTML=time;

              var mgDisplayColor;
            if (magnitudeValue < 2.5) {
              mgDisplayColor = 'green';
            } else if (magnitudeValue >= 2.5 && magnitudeValue <= 3.5) {
                mgDisplayColor = 'orange';
            } else if (magnitudeValue > 3.5 && magnitudeValue <= 4.5) {
                mgDisplayColor = 'red';
            } else {
                mgDisplayColor = 'purple';
            }
            document.getElementById('mgDisplay').style.backgroundColor=mgDisplayColor;
        }

  </script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</body>
</html>