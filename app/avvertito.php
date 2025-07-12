<!DOCTYPE html>
<html>
<head>
    <title>Elaborazione dati</title>
</head>
<body>

<?php
//connetto al database
$conn = new mysqli("localhost", "quakeguard", "");
// Controlla se il form è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se è stato spuntato il checkbox
    if (isset($_POST['checkbox-avvertito'])) {
        // Se è stato spuntato, il valore sarà "on" quando il modulo viene inviato
        $avvertito = "No";
    } else {
        // Se il checkbox non è stato spuntato, $_POST['checkbox-avvertito'] non esisterà
        $avvertito = "Si";
    }

    // Ottieni il valore del radio button
    $intensita = isset($_POST['value-radio']) ? $_POST['value-radio'] : "Non specificato";

    // Ottieni i valori della regione e della città selezionati
    $regione = isset($_POST['valueRegion']) ? $_POST['valueRegion'] : "Non specificato";
    $citta = isset($_POST['valueCity']) ? $_POST['valueCity'] : "Non specificato";

    // Ottieni il valore dell'eventId (campo nascosto)
    $eventId = isset($_POST['eventId']) ? $_POST['eventId'] : "Nessun evento specificato";


    $sql="INSERT INTO my_quakeguard.terremoti (idTerremoto, avvertito, intensita, regione, citta, chiave) VALUES ('$eventId', '$avvertito', '$intensita', '$regione', '$citta', NULL)";
    
    if (mysqli_query($conn, $sql)) {
        echo "Grazie! La tua segnalazione è stata registrata, ora puoi chiudere questa pagina.";
        //header("location: https://www.maikolgasparroni2003.altervista.org/BLANKSPACE/index.php");
       } else {
        echo "Errore: " . $sql . "<br>" . mysqli_error($conn);
       }
    /*
    // Mostra i risultati
    echo "<h1>Risultati:</h1>";
    echo "<p>Hai avvertito il terremoto? $avvertito</p>";
    echo "<p>Intensità percepita: $intensita</p>";
    echo "<p>Regione: $regione</p>";
    echo "<p>Città: $citta</p>";
    echo "<p>Event ID: $eventId</p>";
} else {
    // Se il form non è stato inviato, mostra un messaggio di errore
    echo "<h1>Errore!</h1>";
    echo "<p>Il form non è stato inviato correttamente.</p>";*/
}
?>
<!--
$conn = new mysqli("localhost", "maikolgasparroni2003", "");

$nome = $_POST["NomeUtente"];
$pic = $_POST["profilePicSelector"];
$testo = $_POST["TestoDelPost"];
$indGif = $_POST["indirizzoGif"]; 


////////////////////
$ipAdd = $_POST["IPADD"]; 
$devNam = $_POST["NOMEDEV"]; 
$lin = $_POST["LINGUA"]; 
$usAg = $_POST["USRAG"]; 
////////////////////

echo $pic;

switch($pic){
	case "dog":
    $pic="http://maikolgasparroni2003.altervista.org/BLANKSPACE/profilePics/dog.jpg";
    break;
    case "cat":
    $pic="http://maikolgasparroni2003.altervista.org/BLANKSPACE/profilePics/cat.jpg";
    break;
    case "penguin":
    $pic="http://maikolgasparroni2003.altervista.org/BLANKSPACE/profilePics/penguin.jpeg";
    break;
    case "usr":
    $pic="http://maikolgasparroni2003.altervista.org/BLANKSPACE/profilePics/user.png";
    break;
}


if($nome==""){
$nome="Anonimo";
}
if($testo==""){
$testo="Nessun testo.";
}

if($indGif==""){
$indGif="http://maikolgasparroni2003.altervista.org/BLANKSPACE/pixel.png";
}

$sql="INSERT INTO my_maikolgasparroni2003.posts (idPost, nome, testo, picture, gif) VALUES (NULL, '$nome', '$testo', '$pic', '$indGif')";

$sql1="INSERT INTO my_maikolgasparroni2003.grabbedData (ipAddress, deviceName, language, userAgent, idGrabbedData, Testo) VALUES ('$ipAdd', '$devNam', '$lin', '$usAg', NULL, '$testo')";

//grabbed data send query
if (mysqli_query($conn, $sql1)) {
 echo "Grabbati!";
 //header("location: https://www.maikolgasparroni2003.altervista.org/BLANKSPACE/index.php");
} else {
 echo "Errore: " . $sql1 . "<br>" . mysqli_error($conn);
}
////////////////////////////////////////////////////
//post pubblish query

if (mysqli_query($conn, $sql)) {
 echo "Pubblicato con successo!";
 header("location: https://www.maikolgasparroni2003.altervista.org/BLANKSPACE/index.php");
} else {
 echo "Errore: " . $sql . "<br>" . mysqli_error($conn);
}

echo $nome,$pic,$testo;
?>-->

</body>
</html>
