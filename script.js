document.addEventListener("DOMContentLoaded", function() {
    // URL do Proxy CORS
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    // URL original da API
    const apiUrl = 'https://thingspeak.com/channels/2541390/fields/2/last.json?api_key=GGAYF5YJQY4Q50KI';

    // Combinando o proxy com a URL da API
    const fullUrl = proxyUrl + apiUrl;

    fetch(fullUrl)
        .then(response => {
            // Certifique-se de que a resposta é ok
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
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
            nivelAguaDiv.textContent = 'Erro ao carregar os dados. ' + error.message;
        });
});
