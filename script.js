document.addEventListener("DOMContentLoaded", function() {
    fetch('https://thingspeak.com/channels/2541390/fields/2/last.json?api_key=GGAYF5YJQY4Q50KI')
        .then(response => response.json())
        .then(data => {
            const nivelAguaDiv = document.getElementById('nivel-agua');
            if (data.field2) {
                nivelAguaDiv.textContent = `Nível da água: ${data.field2} cm`;
            } else {
                nivelAguaDiv.textContent = 'Erro ao carregar os dados.';
            }
        })
        .catch(error => {
            const nivelAguaDiv = document.getElementById('nivel-agua');
            nivelAguaDiv.textContent = 'Erro ao carregar os dados.';
        });
});
