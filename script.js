document.addEventListener("DOMContentLoaded", function() {
    fetch('nivel_agua.json')
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
            nivelAguaDiv.textContent = 'Erro ao carregar os dados. ' + error.message;
        });
});
