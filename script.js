document.addEventListener("DOMContentLoaded", function() {
    fetch('nivel_agua.json')  // Certifique-se de que o caminho está correto
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const nivelAguaDiv = document.getElementById('nivel-agua');
            if (data && data.nivel_agua) {
                nivelAguaDiv.textContent = `Nível da água: ${data.nivel_agua} cm`;
            } else {
                nivelAguaDiv.textContent = 'Erro ao carregar os dados. Dados incompletos ou mal formatados.';
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            const nivelAguaDiv = document.getElementById('nivel-agua');
            nivelAguaDiv.textContent = 'Erro ao carregar os dados. ' + error.message;
        });
});
