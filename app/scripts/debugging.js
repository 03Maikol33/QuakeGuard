  // Variabile per memorizzare i log
  let consoleLogs = [];

  // Sovrascrivi console.log per catturare i messaggi
  (function () {
    const originalLog = console.log;
    console.log = function (...args) {
      const logMessage = args.map(String).join(' ');
      consoleLogs.push(logMessage); // Salva i log
      originalLog.apply(console, args); // Continua a loggare nella console
      addLogToPage(logMessage); // Aggiungi i log alla pagina
    };
  })();

  // Aggiungi i log alla div
  function addLogToPage(message) {
    const logContent = document.getElementById('logContent');
    const logLine = document.createElement('div');
    logLine.textContent = message;
    logContent.appendChild(logLine);
  }

  // Mostra/Nascondi i log
  function toggleLogs() {
    const logContainer = document.getElementById('logContainer');
    logContainer.style.display = logContainer.style.display === 'none' ? 'block' : 'none';
  }

  // Pulisci i log
  function clearLogs() {
    consoleLogs = [];
    document.getElementById('logContent').innerHTML = '';
  }