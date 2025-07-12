        function generateImage(title, magnitude, depth, date, callback) {
            const canvas = document.getElementById('generatedImage');
            const ctx = canvas.getContext('2d');
        
            const background = new Image();
            background.src = '../app/resources/texture/dark_black.png';
            
            background.onload = function() {
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 20px nunito';
                ctx.fillText(title, 10, 30);
        
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.fillStyle = '#000';
                ctx.font = '30px nunito';
                let magnitudeText = magnitude + '   ML';
                const textWidth = ctx.measureText(magnitudeText).width;
                const padding = 10;
                const rectWidth = textWidth + padding * 2;
                const rectHeight = 40;
                const rectX = 10;
                const rectY = 50;
                
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
                ctx.fill();
        
                ctx.fillStyle = '#fff';
                ctx.fillText(magnitudeText, rectX + padding, rectY + 30);
        
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 16px nunito';
                ctx.fillText('Profondità: ' + depth + ' km', 10, 120);
        
                ctx.fillText('Data: ' + date, 10, 150);
        
                // Chiama il callback dopo che l'immagine è stata generata
                if (callback) {
                    callback();
                }
            };
        }
        
        function share(id, title, magnitude, depth, date) {
            generateImage(title, magnitude, depth, date, function() {
                const canvas = document.getElementById('generatedImage');
                canvas.toBlob(async function(blob) {
                    const filesArray = [new File([blob], "Quakeguard.it", { type: "image/png" })];
                    const shareData = {
                        title: 'C&#180;e stato un terremoto!',
                        text: 'Scopri di più: https://www.quakeguard.altervista.org/app/specificVisualizer.html?eventId=' + id,
                        files: filesArray
                    };
        
                    try {
                        await navigator.share(shareData);
                        console.log('Condivisione completata');
                        sendNotification("Condivisione avvenuta con successo",3000,0)
                    } catch (err) {
                        console.log('Errore nella condivisione:', err);
                        sendNotification("Condivisione fallita",3000,1)
                    }
                });
            });
        }
        
