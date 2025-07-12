  //offline service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registrato con successo:', registration);
        })
        .catch(function(error) {
            console.log('Registrazione del Service Worker fallita:', error);
        });
    });
}



  //funzione popup
  var popup = document.getElementById("popup");
  function openPopup( message, buttonLabel, image){
    popup.querySelector('p').innerText=message;
    popup.querySelector('button').innerText=buttonLabel;
    popup.querySelector('img').src=image;
    popup.style.display="flex";
  }
  function closePopup(){
    popup.style.display="none";
  }
  //fa scomparire la splashScreen
  var splashScreen = document.getElementById("splashScreen");
  /*setTimeout(function(){
    splashScreen.classList.add("slide-out-blurred-top");*/
    setTimeout(
      function(){
        splashScreen.style.display="none";
      },1500)
  /*}
    ,1300)*/
  
  //controlla se è uno smartphone
  function isMobile() {
    // Controlla l'user agent per dispositivi mobili
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  //controlla se il sito è stato salvato
  function isInStandaloneMode() {
    // Verifica per iOS
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return true;
    }
    // Verifica per Android
    if (window.navigator.standalone !== undefined) {
      return window.navigator.standalone;
    }
    return false;
  }


  window.onload = function() {
    if (!isMobile()) {
      // Reindirizza se non è un dispositivo mobile
      openPopup("Questa app non è ottimizzata per la visualizzazione desktop.", "Prosegui comunque", "resources/error.png");
      return;
      //window.location.href = "https://www.maikolgasparroni2003.altervista.org/QuakeGuard/home.html";
    }
    if (isInStandaloneMode()) {
      //alert("Il sito è aperto come app dalla schermata Home.");
      // Puoi eseguire ulteriori azioni qui
    } else {
      openPopup("Ciao! \n Ti consiglio di salvare il sito web nella tua schermata home per una migliore esperienza.",
        "OK",
        "resources/download-icon.png"
      )
      //alert("Il sito non è aperto come app dalla schermata Home.");
      // Puoi eseguire ulteriori azioni qui
    }
  };
  //cambia impostazioni di dimensione testo
  function changeDimensioneTesto(){
    var paragraphs = document.querySelectorAll('p');
    var headings = Array.from(document.querySelectorAll('h1, h2, h3, h4'));
    var allElements = Array.from(paragraphs).concat(headings);
    checker = document.getElementById("dimensioneTestoOption");
    if(checker.value=="bigger"){
        allElements.forEach(function(element) {
          
        });
    }else{
      allElements.forEach(function(element) {
        
        });
    }
  }
//testiContrastatiOption
  //cambia impostazioni di testo contrastato
  function changeTestiContrastati(){
    var paragraphs = document.querySelectorAll('p');
    //var divs = document.querySelectorAll('div');
    var headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7, h8, h9, h10'));
    var allElements = Array.from(paragraphs).concat(headings);
    checker = document.getElementById("testiContrastatiOption");
    if(checker.value=="si"){
        allElements.forEach(function(element) {
          element.classList.add("testoContrastato");
        });
    }else{
      allElements.forEach(function(element) {
        element.classList.remove("testoContrastato");
        });
    }
  }
  //cambia impostazioni di bordi
  function changeBordiVisibili(){
    var divs= document.querySelectorAll('div');
    checker = document.getElementById("bordiVisibiliOption");
    if(checker.value=="si"){
        divs.forEach(function(div) {
          div.classList.add("bordiVisibili");
        });
    }else{
      divs.forEach(function(div) {
          div.classList.remove("bordiVisibili");
        });
    }
  }
  // Funzione per aggiornare i parametri dell'URL
function updateURLParameter(url, param, paramVal) {
  var newAdditionalURL = "";
  var tempArray = url.split("?");
  var baseURL = tempArray[0];
  var additionalURL = tempArray[1];
  var temp = "";
  if (additionalURL) {
      tempArray = additionalURL.split("&");
      for (var i = 0; i < tempArray.length; i++) {
          if (tempArray[i].split('=')[0] !== param) {
              newAdditionalURL += temp + tempArray[i];
              temp = "&";
          }
      }
  }
  var rows_txt = temp + "" + param + "=" + paramVal;
  return baseURL + "?" + newAdditionalURL + rows_txt;
}
// Cambia la dimensione dei pin sulla mappa principale
function changeMapPointerSize(){
  var target = document.getElementById("containerMappa");
  var checker = document.getElementById("mapPointerSizeSelector").value;
  var currentSrc = target.src;
  switch(checker){
      case 'p':
          target.src = updateURLParameter(currentSrc, 'pinSize', 'normal');
          localStorage.setItem("dimensioniSegnaposto", "p");
          break;
      case 'm':
          target.src = updateURLParameter(currentSrc, 'pinSize', 'medium');
          localStorage.setItem("dimensioniSegnaposto", "m");
          break;
      case 'g':
          target.src = updateURLParameter(currentSrc, 'pinSize', 'large');
          localStorage.setItem("dimensioniSegnaposto", "g");
          break;
      default:
          target.src = updateURLParameter(currentSrc, 'pinSize', 'normal');
          localStorage.setItem("dimensioniSegnaposto", "p");
  }
}

// Cambia il tema della mappa principale
function changeMapTheme(){
  var target = document.getElementById("containerMappa");
  var checker = document.getElementById("mapThemeSelector").value;
  var currentSrc = target.src;
  switch(checker){
      case 'dark':
          target.src = updateURLParameter(currentSrc, 'mapTheme', 'dark');
          localStorage.setItem("mapTheme", "dark");
          break;
      case 'light':
          target.src = updateURLParameter(currentSrc, 'mapTheme', 'light');
          localStorage.setItem("mapTheme", "light");
          break;
      case 'satellite':
          target.src = updateURLParameter(currentSrc, 'mapTheme', 'satellite');
          localStorage.setItem("mapTheme", "satellite");
          break;
      default:
          target.src = updateURLParameter(currentSrc, 'mapTheme', 'dark');
          localStorage.setItem("mapTheme", "dark");
  } 
}
/*
  //cambia la dimen. dei pin sulla mappa principale
  function changeMapPointerSize(){
    target= document.getElementById("containerMappa");
    checker= document.getElementById("mapPointerSizeSelector").value;
    switch(checker){
      case 'p':
        target.src='map.html?pinSize=normal';
        localStorage.setItem("dimensioniSegnaposto", "p");
        break;
      case 'm':
        target.src='map.html?pinSize=medium';
        localStorage.setItem("dimensioniSegnaposto", "m");
        //alert(localStorage.getItem("dimensioniSegnaposto"));
        break;
      case 'g':
        target.src='map.html?pinSize=large';
        localStorage.setItem("dimensioniSegnaposto", "g");
        break;
        default:
          target.src='map.html';
          localStorage.setItem("dimensioniSegnaposto", "p");
    }
  }
  /////////////////////////////
  //cambia il tema della mappa principale
  function changeMapTheme(){
    target= document.getElementById("containerMappa");
    checker= document.getElementById("mapThemeSelector").value;
    switch(checker){*/
      
  ///////////////////////////////
  //selettore linea!!!
  document.addEventListener("DOMContentLoaded", function() {
const navItems = document.querySelectorAll('.nav-item');
const sectionHigliterLine = document.querySelector('.sectionHigliterLine');

const navbarRect = sectionHigliterLine.parentElement.getBoundingClientRect();

// Imposta la linea di evidenziazione inizialmente sotto il primo elemento
const firstNavItemRect = navItems[0].getBoundingClientRect();
const initialTranslateXValue = firstNavItemRect.left - navbarRect.left;
const initialWidthValue = firstNavItemRect.width;

sectionHigliterLine.style.width = `${initialWidthValue}px`;
sectionHigliterLine.style.transform = `translateX(${initialTranslateXValue}px)`;

navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Rimuovi la classe "active" da tutti gli elementi nav-item
    navItems.forEach((navItem) => {
      navItem.classList.remove('active');
    });

    // Aggiungi la classe "active" all'elemento cliccato
    item.classList.add('active');

    // Calcola la larghezza e la traslazione in pixel dell'elemento cliccato
    const itemRect = item.getBoundingClientRect();
    const translateXValue = itemRect.left - navbarRect.left;
    const widthValue = itemRect.width;

    // Applica la larghezza e la traslazione alla linea di evidenziazione
    sectionHigliterLine.style.width = `${widthValue}px`;
    sectionHigliterLine.style.transform = `translateX(${translateXValue}px)`;
  });
});
});
/////fine selettore linea

let terremotiRilevanti=0;

  document.querySelector('.nav-item:nth-child(1)').classList.add('grow');
  document.querySelector('.magnitudeFilterContainer').style.display='flex';
  // Codice JavaScript per gestire il click sulla navbar
  const navbar = document.querySelector('.navbar');
  const listaNavItem = document.querySelector('.nav-item:nth-child(1)');
  const mappaNavItem = document.querySelector('.nav-item:nth-child(2)');
  const vicinoMeNavItem = document.querySelector('.nav-item:nth-child(3)');
  const cercaNavItem = document.querySelector('.nav-item:nth-child(4)');
  const impostazioniNavItem = document.querySelector('.nav-item:nth-child(5)');

  let sezione = 'lista';
  
  function cambiaPagina(pagina){
    switch(pagina){
      case 'lista':
        chiudiTuttePagine();
        document.getElementById("lista").style.display="block";
        document.querySelector('.magnitudeFilterContainer').style.display='flex';
        listaNavItem.classList.add('grow');
        break;
      case 'mappa':
        chiudiTuttePagine();
        document.getElementById("mappa").style.display="block";
        mappaNavItem.classList.add('grow');
        break;
      case 'vicinoMe':
        chiudiTuttePagine();
        document.getElementById("vicinoMe").style.display="block";
        vicinoMeNavItem.classList.add('grow');
        break;
      case 'cerca':
        chiudiTuttePagine();
        document.getElementById("cerca").style.display="block";
        cercaNavItem.classList.add('grow');
        break;
      case 'impostazioni':
        chiudiTuttePagine();
        document.getElementById("impostazioni").style.display="block";
        impostazioniNavItem.classList.add('grow');
        break;
    }
  }
  function chiudiTuttePagine(){
    document.getElementById("mappa").style.display="none";
    document.getElementById("lista").style.display="none";
    document.getElementById("vicinoMe").style.display="none";
    document.getElementById("cerca").style.display="none";
    document.getElementById("impostazioni").style.display="none";
    mappaNavItem.classList.remove('grow');
    listaNavItem.classList.remove('grow');
    vicinoMeNavItem.classList.remove('grow');
    cercaNavItem.classList.remove('grow');
    impostazioniNavItem.classList.remove('grow');
    document.querySelector('.magnitudeFilterContainer').style.display='none';
  }

  listaNavItem.addEventListener('click', () => {
    cambiaPagina('lista');
    console.log('Sezione Lista cliccata');
  });
  
  mappaNavItem.addEventListener('click', () => {
    cambiaPagina('mappa');
    console.log('Sezione Mappa cliccata');
  });

  vicinoMeNavItem.addEventListener('click', () => {
    cambiaPagina('vicinoMe');
    console.log('Sezione vicinoMe cliccata');
  });

  cercaNavItem.addEventListener('click', () => {
    cambiaPagina('cerca');
    console.log('Sezione cerca cliccata');
  });

  impostazioniNavItem.addEventListener('click', () => {
    cambiaPagina('impostazioni');
    console.log('Sezione Impostazioni cliccata');
  });

  let start = 0;
    let limit = 500;

    function showLoadingIcon() {
      console.log("loading icon on");
      document.querySelector('.loadingContainer').style.display = 'flex';
    }

    function hideLoadingIcon() {
      console.log("loading icon off");
      document.querySelector('.loadingContainer').style.display = 'none';
      setTimeout(function() {
        terremotiGeneratiEvent();
      }, 2000);
    }

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
      if(hours!=24 && hours!=25){
        return `${formattedDate} alle ${hours}:${minutes}`;
      }else{
        if(hours==24){
          return `${formattedDate} alle 00:${minutes}`;
        }
        if(hours==25){
          return `${formattedDate} all' 1:${minutes}`;
        }
      }
    }
    //torna vero se siamo nell'ora legale
    function isDaylightSavingTime(date) {
      var jan = new Date(date.getFullYear(), 0, 1);
      var jul = new Date(date.getFullYear(), 6, 1);
      var stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
      return date.getTimezoneOffset() < stdTimezoneOffset;
    }

    let contatore= 0;
    let contatoreBackup =0;
    function createEarthquakeElement(event, listType) {
      const description = event.getElementsByTagName("description")[0];
      const magnitude = event.getElementsByTagName("magnitude")[0];
      const origin = event.getElementsByTagName("origin")[0];

      const time = formatDateTime(origin.getElementsByTagName("value")[0].textContent);
      const location = description.getElementsByTagName("text")[0].textContent;
      const depth = origin.getElementsByTagName("depth")[0].getElementsByTagName("value")[0].textContent/1000;
      const magnitudeValue = magnitude.getElementsByTagName("value")[0].textContent;
      const latitudeElement = event.querySelector('latitude > value');
        const longitudeElement = event.querySelector('longitude > value');
        let latitude = latitudeElement ? latitudeElement.textContent : null;
        let longitude = longitudeElement ? longitudeElement.textContent : null;

      //OTTIENI L'ID UNIVOCO DELL'EVENTO
      let eventId = event.getAttribute('publicID');
      eventId = new URLSearchParams(eventId.split('?')[1]).get('eventId');
      ////////////////

      const earthquakeDiv = document.createElement("div");
      earthquakeDiv.className = "earthquake";
      earthquakeDiv.classList.add("lightThemed");
      earthquakeDiv.classList.add("blackThemeLight");
      earthquakeDiv.id=contatore;
      

      const title = document.createElement("div");
      title.className = "title";
      title.id='title-'+contatore;
      title.textContent = location;
      earthquakeDiv.appendChild(title);

      const info = document.createElement("div");
      info.className = "info-"+contatore;
      info.id='info-'+contatore;
      info.innerHTML = `<strong><a class='valMagnitude'>${magnitudeValue}</a></strong> Ml<br><p id='valDepth'><strong>Profondità:&nbsp;</strong> ${depth} km</p>`;
      const contenitoreMagnitudo = info.querySelector(".valMagnitude");
      contenitoreMagnitudo.id='magnitudo-'+contatore;
      if(parseFloat(contenitoreMagnitudo.textContent)<2.5){
        contenitoreMagnitudo.style.backgroundColor="green";
      }
      if(parseFloat(contenitoreMagnitudo.textContent)>=2.5 && parseFloat(contenitoreMagnitudo.textContent)<=3.5){
        contenitoreMagnitudo.style.backgroundColor="orange";
      }
      if(parseFloat(contenitoreMagnitudo.textContent)>3.5 && parseFloat(contenitoreMagnitudo.textContent)<=5.5){
        contenitoreMagnitudo.style.backgroundColor="red";
      }
      if(parseFloat(contenitoreMagnitudo.textContent)>5.5){
        contenitoreMagnitudo.style.backgroundColor="purple";
      }
      earthquakeDiv.appendChild(info);

      const details = document.createElement("div");
      details.className = "details";
      details.id='details-'+contatore;
      details.textContent = time;
      earthquakeDiv.appendChild(details);

      //GRAPHIC//
      //Se il terremoto è salvato compare con il pulsante salva colorato
      let tmp="<path d='M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z' fill='white'/>";
      /*var arr = JSON.parse(localStorage.getItem('savedQuakes'));
      //console.log(arr);
      let trovato = false;
      console.log(arr);
      for(let i=0; i<arr.length; i++){
        if(arr[i]==eventId){
          trovato = true;
          break;
        }
      }
      if(trovato){
        console.log("LO CONTEINEN");
        tmp="<path d='M200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240 200-120Z' fill='white'/>";
      }else{
        console.log("non lo contiene");
      }*/
    
      const buttons = document.createElement("div");
      buttons.className="containerBottoni";
      buttons.innerHTML="<svg id='hideShowMapBtn"+contatore+"' onclick='hideShowMap("+earthquakeDiv.id+")' viewBox='0 0 576 512' height='24' xmlns='http://www.w3.org/2000/svg'><path d='m288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0 31.55-37.22 113.9-139.76 113.9-196.02 0-69.59-56.41-126-126-126zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm-267.88 47.95a32.006 32.006 0 0 0 -20.12 29.71v250.32c0 11.32 11.43 19.06 21.94 14.86l138.06-62.84v-233.08c-8.84-15.98-16.07-31.54-21.25-46.42zm267.88 143.72c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64v-245.99c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51-138.06 62.84v288l139.88-55.95a31.996 31.996 0 0 0 20.12-29.71v-250.32c0-11.32-11.43-19.06-21.94-14.86z' fill='white'/></svg>";
      buttons.innerHTML += "<svg id='earthquakeShareBtn" + contatore + "' onclick='share(\"" + eventId + "\", \"" + location + "\", \"" + magnitudeValue + "\", \"" + depth + "\", \"" + time + "\")' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z' fill='white'/></svg>";

      if(listType=="savedList"){
        buttons.innerHTML+="<svg id='saveBtn"+eventId+"' onclick='saveEarthquake("+eventId+")' xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#FFFFFF'><path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z'/></svg>"
      }else{
        buttons.innerHTML+="<svg id='saveBtn"+eventId+"' onclick='saveEarthquake("+eventId+")' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'>"+tmp+"</svg>";
      }
      if(contenitoreMagnitudo.textContent>3.0 && listType=="normalList"){buttons.innerHTML+="<svg onclick='avvertito("+earthquakeDiv.id+")' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-114 59.5-210.5T301-838q1 19 4 38.5t10 45.5q-72 44-113.5 116.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-85-41.5-158T644-755q7-26 10-45.5t5-37.5q102 51 161.5 147T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-160q-100 0-170-70t-70-170q0-58 25.5-109t72.5-85q5 15 11 34.5t16 48.5q-22 23-33.5 51T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-32-11.5-60T595-591q8-24 14.5-44.5T621-674q47 34 73 85t26 109q0 100-70 170t-170 70Zm-40-380q-37-112-48.5-157.5T380-860q0-42 29-71t71-29q42 0 71 29t29 71q0 37-11.5 82.5T520-620h-80Zm40 220q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z' fill='white'/></svg>"+"<p class='miniInfoText' style='color:white;' id='num-avvertiti'></p><a class='eventoGraveBtn' href='consultaSegnalazioni.php?eventId="+eventId+"'>Consulta le segnalazioni</a>"; terremotiRilevanti++;}
      if(contenitoreMagnitudo.textContent>=6.0){buttons.innerHTML+="<div class='eventoGraveTxt'>EVENTO GRAVE</div>";}
      earthquakeDiv.appendChild(buttons);

      const flagMenuCondivisione=document.createElement('p');
      flagMenuCondivisione.style.display="none";
      flagMenuCondivisione.id='flagMenuCondivisione';
      flagMenuCondivisione.innerHTML="0";
      earthquakeDiv.appendChild(flagMenuCondivisione);

      const mappa = document.createElement('div');
      mappa.id='map-'+contatore;
      mappa.className='map';
      mappa.style.display='none';
      earthquakeDiv.appendChild(mappa);

      const paragrafoLongitudine= document.createElement('p');
      paragrafoLongitudine.style.display="none";
      paragrafoLongitudine.id='longitudine';
      paragrafoLongitudine.innerHTML=longitude;
      earthquakeDiv.appendChild(paragrafoLongitudine);

      const paragrafoLatitudine= document.createElement('p');
      paragrafoLatitudine.style.display="none";
      paragrafoLatitudine.id='latitudine';
      paragrafoLatitudine.innerHTML=latitude;
      earthquakeDiv.appendChild(paragrafoLatitudine);

      //aggiungo un paragrafo nascosco per l'id
      const idTerremoto = document.createElement('p');
      idTerremoto.style.display='none';
      idTerremoto.id='idTerremoto';
      idTerremoto.innerHTML=eventId;
      earthquakeDiv.appendChild(idTerremoto);

      return earthquakeDiv;
    }

    let aperto=false;
    function chiudiMappaSpecifica(){
      document.querySelector('#specificMapVisualizerOverlayDiv').style.animation = "slideOutRight 0.2s forwards";
      // Aspetta 2 secondi dopo l'animazione
      setTimeout(function() {
        aperto=false;
      document.querySelector('#specificMap').innerHTML='';
      document.querySelector('#specificMapVisualizerOverlayDiv').style.display='none';
      document.querySelector('.magnitudeFilterContainer').style.display='flex';
      }, 500);
    }
    
    function hideShowMap(id){
      const earthquakeDiv = document.getElementById(id);
      if(aperto){
        console.log("togliMappa");
        aperto = false;
        document.querySelector('.magnitudeFilterContainer').style.display='flex';
        document.querySelector('#specificMapVisualizerOverlayDiv').style.display='none';
        document.querySelector('#specificMap').innerHTML='';
      }else{
        document.querySelector('#specificMapVisualizerOverlayDiv').style.animation = "none";
        //qui carica la mappa
        console.log('mettiMappa');
        aperto = true;
        document.querySelector('.magnitudeFilterContainer').style.display='none';
        document.querySelector('#specificMapVisualizerOverlayDiv').style.display="block";
        //prendo le info
        var titolo = earthquakeDiv.querySelector('#title-'+id).innerHTML;
        var profondita = earthquakeDiv.querySelector('#info-'+id).querySelector('#valDepth').textContent;
        var magnitude = parseFloat(earthquakeDiv.querySelector('.valMagnitude').innerHTML);
        var dataOra = earthquakeDiv.querySelector('#details-'+id).textContent;
        var latitude = earthquakeDiv.querySelector('#latitudine').innerHTML;
        var longitude = earthquakeDiv.querySelector('#longitudine').innerHTML;
        
        
        //uso i dati estrapolati
        var map = new ol.Map({
          target: 'specificMap',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          view: new ol.View({
            center: ol.proj.fromLonLat([longitude, latitude]), // Coordinate di default per centrare la mappa sull'Italia
            zoom: 14 // Zoom di default
          })
        });
              
              //console.log(magnitude);
              var pinColor;
              var pinWaveColor;
              if (magnitude < 2.5) {
                pinColor = 'green';
                pinWaveColor='green';
              } else if (magnitude >= 2.5 && magnitude <= 3.5) {
                pinColor = 'orange';
                pinWaveColor='orange';
              } else if (magnitude > 3.5 && magnitude <= 4.5) {
                pinColor = 'red';
                pinWaveColor='red';
              } else {
                pinColor = 'purple';
                pinWaveColor='purple';
              }

              

              var pin = document.createElement('div');
              pin.className = 'pin ' + pinColor;

              var overlay = new ol.Overlay({
                position: ol.proj.fromLonLat([longitude, latitude]),
                positioning: 'center-center',
                element: pin,
                stopEvent: false
              });

              var pinWave = document.createElement('div');
              pinWave.className='pinWave ' + pinWaveColor;

              var overlay2 = new ol.Overlay({
                position: ol.proj.fromLonLat([longitude, latitude]),
                positioning: 'center-center',
                element: pinWave,
                stopEvent: false
              });

              map.addOverlay(overlay);
              map.addOverlay(overlay2);
            }
        document.querySelector('#specificTitle').innerHTML=titolo;
        document.querySelector('#specificInfo').innerHTML=profondita;
        document.querySelector('#specificMagnitude').innerHTML=magnitude+" Ml";
        document.querySelector('#specificDataOra').innerHTML=dataOra;
        document.querySelector('#specificMapVisualizerOverlayDiv').style.animation = "slideInLeft 0.2s forwards";
    } 
    ///

    function shareApp(){
      navigator.share({
      title: 'QuakeGuard.it',
      text: "Prova questa nuova applicazione!\n si chaiama QuakeGuard\n https://www.quakeguard.it \n Resta informato!"
      })
    }

    function avvertito(id){
      //si collega al database e aggiunge 1 a ho sentito
      const earthquakeDiv=document.getElementById(id);
      const idTerremoto=earthquakeDiv.querySelector('#idTerremoto').innerHTML;
      window.open('avvertito.html?eventId='+idTerremoto, '_blank');
    }

    var notifica = document.getElementById("notifica");
    function sendNotification(text, timing, isItError){
      if(isItError){notifica.classList.add("notifica-rossa");}else{notifica.classList.add("notifica-verde"); play();};
      notifica.textContent=text;
      notifica.style.display="block";
      notifica.style.animation="notificationSlideIn 0.5s forwards";
      setTimeout(function(){
        notifica.style.animation="notificationSlideOut 0.5s forwards"
        setTimeout(function(){
          notifica.classList.remove("notifica-rossa");
          notifica.classList.remove("notifica-verde");
        },500)
      },timing)
    }

    //sendNotification("Questa è una notifica di prova. QuakeGuard utilizzerà le notifiche in-app per avvisarti in tempo reale in caso vengano registrati altri terremoti.", 2000);
   /* function share(id){
      const earthquakeDiv=document.getElementById(id);

      const idTerremoto=earthquakeDiv.querySelector('#idTerremoto').innerHTML;
      //crea url
      var url = "https://www.quakeguard.altervista.org/app/specificVisualizer.html?";
      url+="eventId="+idTerremoto;
      // menu condivisione (c'è bisogno di una connessione https)
      navigator.share({
      title: 'QuakeGuard.it',
      text: "⚠️C'è stato un terremoto!⚠️\n "+url+" \n by QuakeGuard.it"
      })
      //fine menu
    }
*/
    function aggiorna(){
      location.reload(true);
    }

    var listLimit=localStorage.getItem('listLimit');
    function fetchEarthquakes(mag) {
      //gestisci l'impostazione di limite lista
      listLimit=localStorage.getItem('listLimit');
      if(listLimit==null){
        listLimit=document.getElementById('listLimitSetting').value;
        localStorage.setItem('listLimit',listLimit);
      }
      //salva le impostazioni di magnitudo minimo
      localStorage.setItem('minMagnitudeFilter', mag);
      ///
      //tentativo di url con starttime e endtime
      /*
      const today = new Date();
      const threeDaysAgo = new Date(today);
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

      const startTime = threeDaysAgo.toISOString().replace('Z', '000Z');
      const endTime = today.toISOString().replace('Z', '000Z');

      const url = `https://webservices.ingv.it/fdsnws/event/1/query?minmagnitude=`+mag+`&limit=`+listLimit+`&orderby=time&format=xml&starttime=${startTime}&endtime=${endTime}`;
      */
      const today = new Date();
      const threeDaysAgo = new Date(today);
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

      function formatISOForAPI(date) {
        const isoString = date.toISOString();
        return isoString.split('.')[0]; // Rimuove i millisecondi e il suffisso 'Z'
      }

      const startTime = formatISOForAPI(threeDaysAgo);
      const endTime = formatISOForAPI(today);

      const url = `https://webservices.ingv.it/fdsnws/event/1/query?limit=120&orderby=time&format=xml&starttime=${startTime}&endtime=${endTime}`;

      
      console.log(url);
      //////////////////////////////////////////
      showLoadingIcon();

      fetch(url)
        .then(response => response.text())
        .then(data => {
          hideLoadingIcon();

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(data, "text/xml");
          const events = xmlDoc.getElementsByTagName("event");

          if (events.length === 0) {
            const noDataMessage = `<p>Nessun terremoto trovato.</p>`;
            document.getElementById('contaTerremoti').innerHTML='Terremoti visualizzati: 0';
            document.querySelector("#earthquake-list").innerHTML = noDataMessage;
            return;
          }
          contatore=0;
          const earthquakeList = document.querySelector("#earthquake-list");
          var backupQuakes = JSON.parse(localStorage.getItem('backupQuakes')) || []; // se nessun terremoto è savlato allora restituisce un array vuoto invece che null

          //alert(backupQuakes);
          const areThereBackuppedQuakes = (backupQuakes.length != 0);

          for (let i = start; i < start + limit && i < events.length; i++) {
            contatore++;
            document.getElementById('contaTerremoti').innerHTML='Terremoti visualizzati: '+contatore;
            const event = events[i];
            if(!areThereBackuppedQuakes){
              backupQuakes.push({
                eventId: new URLSearchParams(event.getAttribute('publicID').split('?')[1]).get('eventId'),
                time: formatDateTime(event.getElementsByTagName("origin")[0].getElementsByTagName("value")[0].textContent),
                location: event.getElementsByTagName("description")[0].getElementsByTagName("text")[0].textContent,
                depth: event.getElementsByTagName("origin")[0].getElementsByTagName("depth")[0].getElementsByTagName("value")[0].textContent / 1000,
                magnitude: event.getElementsByTagName("magnitude")[0].getElementsByTagName("value")[0].textContent,
                latitude: event.querySelector('latitude > value') ? event.querySelector('latitude > value').textContent : null,
                longitude: event.querySelector('longitude > value') ? event.querySelector('longitude > value').textContent : null
              });
            }
            const earthquakeDiv = createEarthquakeElement(event, "normalList");
            earthquakeList.appendChild(earthquakeDiv);
          }
          changeTheme();
          if(!areThereBackuppedQuakes)
            localStorage.setItem('backupQuakes', JSON.stringify(backupQuakes));
          //console.log(JSON.parse(localStorage.getItem('backupQuakes')));
        })
        .catch(error => {
          hideLoadingIcon();
          console.log(error);
        });
        document.getElementById("earthquake-list").innerHTML="";
    }

    //cerca i terremoti a partire dalla megnitudo minima salvata sul dispositivo:
    let filtroMagnitudoValore = parseFloat(localStorage.getItem('minMagnitudeFilter'));
    if(filtroMagnitudoValore!=0 && filtroMagnitudoValore!=2 && filtroMagnitudoValore!=4){
      filtroMagnitudoValore=0;
      localStorage.setItem('minMagnitudeFilter', 0)
    }
    fetchEarthquakes(filtroMagnitudoValore);
    // Funzione che si attiva dopo che i terremoti sono stati generati
function terremotiGeneratiEvent() {
    // Per ogni div terremoto, esegui una richiesta AJAX per ottenere il numero di segnalazioni
    $('.earthquake').each(function() {
        var idTerremoto = $(this).find('#idTerremoto').text(); // Recupera l'ID del terremoto
        var numeroAvvertitiElement = $(this).find('#num-avvertiti'); // Seleziona l'elemento con ID num-avvertiti
        //console.log('id terremoto:'+idTerremoto);
        var mag = $(this).find('.valMagnitude').text();
        if(mag>3.0){
          //console.log(mag+' rilevante');
            // Esegui una richiesta AJAX per ottenere il numero di segnalazioni di avvertimento dal tuo file PHP
            $.ajax({
                type: "GET",
                url: "mySqlDatabaseQueries.php",
                data: {
                    id_terremoto: idTerremoto
                },
                success: function(response) {
                    //console.log(response);
                    /*numeroAvvertitiElement.text('Avvertito da ' + response+' persone.');*/
                },
                error: function(xhr, status, error) {
                    console.error(error);
                    numeroAvvertitiElement.text('Impossibile ottenere il numero di segnalazioni.');
                }
            });
          }
    });
}

document.getElementById("lista").style.display="block";
    document.getElementById("mappa").style.display="none";
    document.getElementById("vicinoMe").style.display="none";
    document.getElementById("cerca").style.display="none";
    document.getElementById("impostazioni").style.display="none";

    function scorriAllaCima() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    //gestisci appari/scompari pulstante torna all cima
    window.addEventListener('scroll', function(){
      if (window.pageYOffset == 0) {
        document.getElementById("tornasu").style.display="none";
      }else{
        //console.log(window.pageYOffset);
        document.getElementById("tornasu").style.display="block";
      }
    });

  /*animazione del salvataggio del terremoto*/
  function saveAnimation(element){
    element.classList.add('saveAnimation');
    setTimeout(function(){
      element.classList.remove('saveAnimation');
    },800)
  }
  ////////////////////////////
//gestione del salvataggio dei terremoti
caricaTerremotiSalvati();
function saveEarthquake(id){
  /*animazione di salvataggio*/
  let actualSaveBtn = document.getElementById("saveBtn"+id);
  saveAnimation(actualSaveBtn);
  /////////////////////////////
  let localSavedQuakes = [];
  if(localStorage.getItem('savedQuakes')!=null){
    localSavedQuakes = JSON.parse(localStorage.getItem('savedQuakes'));
  }
  if(localSavedQuakes.includes(id)){
    //rimuovi l'elemento dall'array
    localSavedQuakes.splice(localSavedQuakes.indexOf(id),1);
    localStorage.setItem('savedQuakes', JSON.stringify(localSavedQuakes));
    sendNotification("Terremoto rimosso dalla lista.", 1500, false);
    caricaTerremotiSalvati();
    return;
  }
  localSavedQuakes.push(id);
  localStorage.setItem('savedQuakes', JSON.stringify(localSavedQuakes));
  sendNotification("Terremoto salvato nella lista.", 1500, false);
  caricaTerremotiSalvati();
}
function caricaTerremotiSalvati(){
  let tg = document.getElementById("savedQuakesList");
  tg.innerHTML="";
  savedQuakes = [];
  if(localStorage.getItem('savedQuakes')!=null){
    savedQuakes=JSON.parse(localStorage.getItem('savedQuakes'));
  }
  for(let i=0; i<savedQuakes.length; i++){
  
    const url = "https://webservices.ingv.it/fdsnws/event/1/query?eventid="+savedQuakes[i]+"&format=xml";
    
    fetch(url)
    .then(response => response.text())
    .then(data => {
      //hideLoadingIcon();

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "text/xml");
      const events = xmlDoc.getElementsByTagName("event");
      const earthquakeDiv = createEarthquakeElement(events[0],"savedList");
      tg.appendChild(earthquakeDiv);
      changeTheme();
    });
  }
}

//recupera le impostazioni salvate

//filtro magnitudo
var op1 = document.getElementById('opzione1Magnitudo');
var op2 = document.getElementById('opzione2Magnitudo');
var op3 = document.getElementById('opzione3Magnitudo');
var minMagnitudeFilter = parseInt(localStorage.getItem('minMagnitudeFilter'));
switch(minMagnitudeFilter){
  case 0:
    op1.checked = true;
    op2.checked = false;
    op3.checked = false;
    break;
  case 2:
    op1.checked = false;
    op2.checked = true;
    op3.checked = false;
    break;
  case 4:
    op1.checked = false;
    op2.checked = false;
    op3.checked = true;
    break;
  default:
    op1.checked = true;
    op2.checked = false;
    op3.checked = false;
    break;
}
////////////////
//dimensioni segnapostoe tema della mappa
var dimensioniSegnaposto = localStorage.getItem("dimensioniSegnaposto");
//alert(dimensioniSegnaposto);
if(dimensioniSegnaposto!="p" && dimensioniSegnaposto!="m" && dimensioniSegnaposto!="g"){
  dimensioniSegnaposto="p";
  localStorage.setItem("dimensioniSegnaposto", "p");
}
document.getElementById("mapPointerSizeSelector").value=dimensioniSegnaposto;
var temaMappa = localStorage.getItem("mapTheme");
if(temaMappa==null){temaMappa="light";}
document.getElementById("mapThemeSelector").value=temaMappa;
switch(dimensioniSegnaposto){
  case "p":
    document.getElementById("containerMappa").src="map.html?pinSize=normal&mapTheme="+temaMappa;
    break;
  case "m":
    document.getElementById("containerMappa").src="map.html?pinSize=medium&mapTheme="+temaMappa;
    break;
  case "g":
    document.getElementById("containerMappa").src="map.html?pinSize=large&mapTheme="+temaMappa;
    break;
  default:
    document.getElementById("containerMappa").src="map.html&mapTheme="+temaMappa;
    break;
}


/*Tema dell'app*/
var temaApp = localStorage.getItem("appTheme");
if(temaApp==null){temaApp="black";}
document.getElementById("appThemeSelector").value=temaApp;
changeTheme();
/*Limite della lista*/
function saveListLimitSetting(){
  localStorage.setItem('listLimit', document.getElementById('listLimitSetting').value);
}
if(localStorage.getItem('listLimit')==null){
  document.getElementById('listLimitSetting').value="50";
}else{
  document.getElementById('listLimitSetting').value=localStorage.getItem('listLimit');
}
/****************** */
//carica in anteprima i terremoti già salvati nel localStorage
let backupQuakes = JSON.parse(localStorage.getItem('backupQuakes'));
if(backupQuakes!=null){
  for(let i=0; i<backupQuakes.length; i++){
    createEarthquakeElementFromBackup(backupQuakes[i]);
    //const { eventId, time, location, depth, magnitude, latitude, longitude } = earthquake;
  }
}

function createEarthquakeElementFromBackup(event) {
  //console.log("backupQuake number "+contatoreBackup+" :");
  const { eventId, time, location, depth, magnitude, latitude, longitude } = event;
  //console.log(eventId+"\n"+time+"\n"+location+"\n"+depth+" \n"+magnitude+"\n"+latitude+"\n"+longitude);

  const earthquakeDiv = document.createElement("div");
  earthquakeDiv.className = "earthquake";
  earthquakeDiv.id=contatoreBackup;
  

  const title = document.createElement("div");
  title.className = "title";
  title.id='title-'+contatoreBackup;
  title.textContent = location+" BACKUPPED";
  earthquakeDiv.appendChild(title);

  const info = document.createElement("div");
  info.className = "info-"+contatoreBackup;
  info.id='info-'+contatoreBackup;
  info.innerHTML = `<strong><a class='valMagnitude'>${magnitude}</a></strong> Ml<br><p id='valDepth'><strong>Profondità:</strong> ${depth} km</p>`;
  const contenitoreMagnitudo = info.querySelector(".valMagnitude");
  contenitoreMagnitudo.id='magnitudo-'+contatoreBackup;
  if(parseFloat(contenitoreMagnitudo.textContent)<2.5){
    contenitoreMagnitudo.style.backgroundColor="green";
  }
  if(parseFloat(contenitoreMagnitudo.textContent)>=2.5 && parseFloat(contenitoreMagnitudo.textContent)<=3.5){
    contenitoreMagnitudo.style.backgroundColor="orange";
  }
  if(parseFloat(contenitoreMagnitudo.textContent)>3.5 && parseFloat(contenitoreMagnitudo.textContent)<=5.5){
    contenitoreMagnitudo.style.backgroundColor="red";
  }
  if(parseFloat(contenitoreMagnitudo.textContent)>5.5){
    contenitoreMagnitudo.style.backgroundColor="purple";
  }
  earthquakeDiv.appendChild(info);

  const details = document.createElement("div");
  details.className = "details";
  details.id='details-'+contatoreBackup;
  details.textContent = time;
  earthquakeDiv.appendChild(details);

  //GRAPHIC//
  //Se il terremoto è salvato compare con il pulsante salva colorato
  let tmp="<path d='M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z' fill='white'/>";
  const buttons = document.createElement("div");
  buttons.className="containerBottoni";
  buttons.innerHTML="<svg id='hideShowMapBtn"+eventId+"' onclick='hideShowMap("+earthquakeDiv.id+")' viewBox='0 0 576 512' height='24' xmlns='http://www.w3.org/2000/svg'><path d='m288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0 31.55-37.22 113.9-139.76 113.9-196.02 0-69.59-56.41-126-126-126zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm-267.88 47.95a32.006 32.006 0 0 0 -20.12 29.71v250.32c0 11.32 11.43 19.06 21.94 14.86l138.06-62.84v-233.08c-8.84-15.98-16.07-31.54-21.25-46.42zm267.88 143.72c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64v-245.99c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51-138.06 62.84v288l139.88-55.95a31.996 31.996 0 0 0 20.12-29.71v-250.32c0-11.32-11.43-19.06-21.94-14.86z' fill='white'/></svg>";
  buttons.innerHTML+="<svg id='earthquakeShareBtn"+eventId+"' onclick='share("+earthquakeDiv.id+")' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z' fill='white'/></svg>";
  buttons.innerHTML+="<svg onclick='saveEarthquake("+eventId+")' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'>"+tmp+"</svg>";
  if(contenitoreMagnitudo.textContent>3.0){buttons.innerHTML+="<svg onclick='avvertito("+earthquakeDiv.id+")' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-114 59.5-210.5T301-838q1 19 4 38.5t10 45.5q-72 44-113.5 116.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-85-41.5-158T644-755q7-26 10-45.5t5-37.5q102 51 161.5 147T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-160q-100 0-170-70t-70-170q0-58 25.5-109t72.5-85q5 15 11 34.5t16 48.5q-22 23-33.5 51T320-480q0 66 47 113t113 47q66 0 113-47t47-113q0-32-11.5-60T595-591q8-24 14.5-44.5T621-674q47 34 73 85t26 109q0 100-70 170t-170 70Zm-40-380q-37-112-48.5-157.5T380-860q0-42 29-71t71-29q42 0 71 29t29 71q0 37-11.5 82.5T520-620h-80Zm40 220q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z' fill='white'/></svg>"+"<p class='miniInfoText' style='color:white;' id='num-avvertiti'></p>"; terremotiRilevanti++;}
  earthquakeDiv.appendChild(buttons);

  const flagMenuCondivisione=document.createElement('p');
  flagMenuCondivisione.style.display="none";
  flagMenuCondivisione.id='flagMenuCondivisione';
  flagMenuCondivisione.innerHTML="0";
  earthquakeDiv.appendChild(flagMenuCondivisione);

  const mappa = document.createElement('div');
  mappa.id='map-'+contatoreBackup;
  mappa.className='map';
  mappa.style.display='none';
  earthquakeDiv.appendChild(mappa);

  const paragrafoLongitudine= document.createElement('p');
  paragrafoLongitudine.style.display="none";
  paragrafoLongitudine.id='longitudine';
  paragrafoLongitudine.innerHTML=longitude;
  earthquakeDiv.appendChild(paragrafoLongitudine);

  const paragrafoLatitudine= document.createElement('p');
  paragrafoLatitudine.style.display="none";
  paragrafoLatitudine.id='latitudine';
  paragrafoLatitudine.innerHTML=latitude;
  earthquakeDiv.appendChild(paragrafoLatitudine);

  //aggiungo un paragrafo nascosco per l'id
  const idTerremoto = document.createElement('p');
  idTerremoto.style.display='none';
  idTerremoto.id='idTerremoto';
  idTerremoto.innerHTML=eventId;
  earthquakeDiv.appendChild(idTerremoto);

  return earthquakeDiv;
}


/*esporta e importa i terremoti salvati*/
function exportSavedQuakes() {
  try {
    let savedQuakes = localStorage.getItem('savedQuakes');
    if (!savedQuakes) {
      sendNotification("Non ci sono terremoti salvati", 3000, true);
      return;
    }
    // Crea il blob e genera l'URL per il file
    const blob = new Blob([savedQuakes], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Crea un link temporaneo per il download e attivarlo automaticamente
    const a = document.createElement('a');
    a.href = url;
    a.download = 'savedQuakes.json'; // Nome del file
    document.body.appendChild(a);
    a.click(); // Simula il click per avviare il download
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    sendNotification("Lista salvata nel file", 3000, false);
  } catch (err) {
    console.error('Errore, impossibile esportare la lista dei terremoti salvati: ', err);
    sendNotification("Errore, impossibile esportare la lista", 3000, true);
  }
}
function importSavedQuakes() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.json,.txt'; // Specifica i formati accettati
  fileInput.onchange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.log("Errore: nessun file selezionato.");
      sendNotification("Errore, nessun file selezionato.", 3000, true);
      return;
    }

    try {
      console.log("File selezionato:", file.name);

      const text = await file.text();
      console.log("Contenuto del file:", text);

      const quakeIDs = JSON.parse(text);
      console.log("Array parsato dal file JSON:", quakeIDs);

      if (!Array.isArray(quakeIDs)) {
        console.log("Errore: il file non contiene un array valido.");
        sendNotification("Errore, formato file non valido.", 3000, true);
        return;
      }

      // Ottieni la lista attuale dei terremoti salvati
      let currentQuakes = JSON.parse(localStorage.getItem('savedQuakes')) || [];
      console.log("Lista attuale prima dell'importazione (localStorage):", currentQuakes);

      // Aggiungi tutti i nuovi terremoti dal file alla lista temporanea
      quakeIDs.forEach((id) => {
        if (!currentQuakes.includes(id)) {
          currentQuakes.push(id);
          console.log("Aggiunto terremoto alla lista temporanea:", id);
        } else {
          console.log("Terremoto già presente, ignorato:", id);
        }
      });

      console.log("Lista temporanea dopo aggiunta (prima della deduplicazione):", currentQuakes);

      // Rimuovi duplicati usando un Set (può essere ridondante ma garantisce sicurezza)
      currentQuakes = [...new Set(currentQuakes)];
      console.log("Lista finale deduplicata:", currentQuakes);

      // Aggiorna `localStorage` con la lista deduplicata
      localStorage.setItem('savedQuakes', JSON.stringify(currentQuakes));
      caricaTerremotiSalvati();
      console.log("Lista salvata in localStorage dopo importazione:", currentQuakes);

      sendNotification(
        `Importazione completata. ${quakeIDs.length} terremoti elaborati.`,
        3000,
        false
      );
    } catch (err) {
      console.error("Errore durante l'importazione:", err);
      sendNotification("Errore, impossibile importare la lista", 3000, true);
    }
  };

  // Simula il click sull'input file
  fileInput.click();
}

/*
function exportSavedQuakes(){
  try {
    let toCopy = JSON.parse(localStorage.getItem('savedQuakes')).toString();
    console.log(toCopy);
    if(toCopy==null){sendNotification("Non ci sono terremoti salvati", 3000, true); return;}
    navigator.clipboard.writeText(toCopy);
    sendNotification("Lista copiata negli appunti", 3000, false);
} catch (err) {
    console.error('Errore, impossibile copiare la lista dei terremoti salvati: ', err);
    sendNotification("Errore, impossibile copiare la lista negli appunti", 3000, true);
}
}

function importSavedQuakes(){
  let text = document.getElementById("importSavedQuakesTextArea").value;
  if(text==""){sendNotification("Errore, inserire almeno un terremoto.", 1000, true); return;}
  let tempArray = text.split(',');
  tempArray = tempArray.map(item => item.trim());
  tempArray.forEach(element => {
      saveEarthquake(element);
  });
}*/
///////////////////////////
//personalizzazione del tema
// Creazione delle liste per gli elementi a tema scuro e chiaro
// Funzione per cambiare il tema
function changeTheme(){
  console.log("Cambiato tema");
  let darkThemedElements = Array.from(document.querySelectorAll('.darkThemed'));
  let lightThemedElements = Array.from(document.querySelectorAll('.lightThemed'));
  let theme = document.getElementById("appThemeSelector").value;
  localStorage.setItem("appTheme", theme);
  lightThemedElements.forEach(element => {
    element.classList.remove('blackThemeLight');
    element.classList.remove('pinkThemeLight');
    element.classList.remove('blueThemeLight');
    element.classList.remove('prideThemeLight');
    element.classList.remove('brownThemeLight');
    element.classList.remove('xMASThemeLight');
    element.classList.add(theme+'ThemeLight');
  });
  darkThemedElements.forEach(element => {
    element.classList.remove('blackThemeDark');
    element.classList.remove('pinkThemeDark');
    element.classList.remove('blueThemeDark');
    element.classList.remove('brownThemeDark');
    element.classList.remove('prideThemeDark');
    element.classList.remove('xMASThemeDark');
    element.classList.add(theme+'ThemeDark');
  });
}
//////////////////////////////////////////////////////