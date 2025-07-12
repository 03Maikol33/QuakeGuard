
<?php
/*
//connetto al database
$conn = new mysqli("localhost", "maikolgasparroni2003", "");

// Verifica la connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
    echo'errore di connessione';
}

// Ricevi l'ID del terremoto dalla richiesta AJAX
$idTerremoto = $_GET['id_terremoto'];
// Esegui la query per ottenere il numero di segnalazioni di avvertimento per questo terremoto
$query = "SELECT COUNT(*) AS numero_segnalazioni FROM terremoti WHERE idTerremoto = '$idTerremoto' AND avvertito='Si'";
$result = $conn->query($query);
echo $result;
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $numeroSegnalazioni = $row["numero_segnalazioni"];
    echo $numeroSegnalazioni; // Invia il numero di segnalazioni come risposta alla richiesta AJAX
} else {
    echo "0"; // Se non ci sono segnalazioni, restituisci 0
}

// Chiudi la connessione al database
$conn->close();*/
?>
<?php
$conn = new mysqli("localhost", "maikolgasparroni2003", "");
//$sql =  la query per ottenere il numero di segnalazioni di avvertimento per questo terremoto
$query = "SELECT COUNT(*) AS numero_segnalazioni FROM terremoti WHERE idTerremoto = '$idTerremoto' AND avvertito='Si'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
 // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo $row['numero_segnalazioni'];
    }
} 
else {
    echo "0";
}

/*

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

echo $nome,$pic,$testo;*/


/*
// Connessione al database
$conn = new mysqli("localhost", "maikolgasparroni2003", "");

// Verifica la connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Ricevi l'ID del terremoto dalla richiesta AJAX
$idTerremoto = $_GET['id_terremoto'];

// Prepara la query parametrizzata
//$query ="SELECT COUNT(*) AS numero_segnalazioni FROM terremoti WHERE idTerremoto=\'2353434\' AND avvertito=\'Si\';";
$query = "SELECT COUNT(*) AS numero_segnalazioni FROM terremoti WHERE idTerremoto = ? AND avvertito = 'Si'";
$stmt = $conn->prepare($query);

// Associa il parametro e esegui la query
$stmt->bind_param("s", $idTerremoto); // Utilizzo "s" per indicare che l'ID del terremoto è una stringa
$stmt->execute();

// Ottieni il risultato della query
$result = $stmt->get_result();
echo $result;
if ($result) {
    $row = $result->fetch_assoc();
    $numeroSegnalazioni = $row["numero_segnalazioni"];
    echo $numeroSegnalazioni; // Invia il numero di segnalazioni come risposta alla richiesta AJAX
} else {
    echo "0"; // Se non ci sono segnalazioni, restituisci 0 o un messaggio di errore
}

// Chiudi la connessione al database
$stmt->close();
$conn->close();*/
?>