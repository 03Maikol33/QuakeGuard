function generateImage(title, magnitude, depth, date, callback) {
    const canvas = document.getElementById('generatedImage');
    const ctx = canvas.getContext('2d');
    
    // Pulisci il canvas prima di ridisegnare
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const background = new Image();
    background.crossOrigin = 'Anonymous'; // Utile se l'immagine viene da un dominio diverso
    background.src = '../app/resources/texture/dark_black.png';
    
    background.onload = function() {
        // Disegna lo sfondo
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Imposta lo stile del testo una volta invece di ripeterlo
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;

        // Titolo
        ctx.font = 'bold 20px Nunito';
        ctx.fillText(title, 10, 30);

        // Rettangolo con magnitudo
        ctx.font = '30px Nunito';
        let magnitudeText = magnitude + '   ML';
        const textWidth = ctx.measureText(magnitudeText).width;
        const padding = 10;
        const rectWidth = textWidth + padding * 2;
        const rectHeight = 40;
        const rectX = 10;
        const rectY = 50;
        
        // Disegna il rettangolo con bordi arrotondati
        ctx.beginPath();
        ctx.moveTo(rectX + 5, rectY);
        ctx.lineTo(rectX + rectWidth - 5, rectY);
        ctx.quadraticCurveTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + 5);
        ctx.lineTo(rectX + rectWidth, rectY + rectHeight - 5);
        ctx.quadraticCurveTo(rectX + rectWidth, rectY + rectHeight, rectX + rectWidth - 5, rectY + rectHeight);
        ctx.lineTo(rectX + 5, rectY + rectHeight);
        ctx.quadraticCurveTo(rectX, rectY + rectHeight, rectX, rectY + rectHeight - 5);
        ctx.lineTo(rectX, rectY + 5);
        ctx.quadraticCurveTo(rectX, rectY, rectX + 5, rectY);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = '#008000';
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.fillText(magnitudeText, rectX + padding, rectY + 30);

        // Altri dettagli
        ctx.font = 'bold 16px Nunito';
        ctx.fillText('Profondità: ' + depth + ' km', 10, 120);
        ctx.fillText('Data: ' + date, 10, 150);

        // Chiama il callback
        callback && callback();
    };
    
    // Gestione degli errori nel caricamento dell'immagine
    background.onerror = function() {
        console.error("Errore nel caricamento dell'immagine di sfondo");
        // Fallback: sfondo nero solido
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        callback && callback();
    };
}
        
        function share(id, title, magnitude, depth, date) {
    generateImage(title, magnitude, depth, date, function() {
        const canvas = document.getElementById('generatedImage');
        canvas.toBlob(async function(blob) {
            const filesArray = [new File([blob], "quakeguard_share.png", { type: "image/png" })];
            const shareData = {
                title: "C'è stato un terremoto!",
                text: `&#9888;C'è stato un terremoto!\n Terremoto di magnitudo ${magnitude} registrato a ${location}.\n \n  Scopri di più: https://03Maikol33.github.io/QuakeGuard/app/specificVisualizer.html?eventId=${id}`,
                files: filesArray
            };

            try {
                if (navigator.canShare && navigator.canShare({ files: filesArray })) {
                    await navigator.share(shareData);
                    console.log('Condivisione completata');
                    sendNotification("Condivisione avvenuta con successo", 3000, 0);
                } else {
                    // Fallback per browser che non supportano la condivisione di file
                    const shareUrl = `https://03Maikol33.github.io/QuakeGuard/app/specificVisualizer.html?eventId=${id}`;
                    await navigator.share({
                        title: "C'è stato un terremoto!",
                        text: `Terremoto di magnitudo ${magnitude}. Scopri di più: ${shareUrl}`
                    });
                }
            } catch (err) {
                console.log('Errore nella condivisione:', err);
                sendNotification("Condivisione fallita", 3000, 1);
                
                // Fallback: download dell'immagine
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'quakeguard_share.png';
                link.click();
                URL.revokeObjectURL(link.href);
            }
        }, 'image/png', 1); // Qualità al 100%
    });
}