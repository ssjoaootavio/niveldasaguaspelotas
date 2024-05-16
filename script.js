document.addEventListener("DOMContentLoaded", function() {
    fetch('nivel_agua.json')  // Assegure-se de que o caminho para o arquivo está correto
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const nivelAguaSaoGoncaloDiv = document.getElementById('nivel-agua-sao-goncalo');
            const nivelAguaLagoaDosPatosDiv = document.getElementById('nivel-agua-lagoa-dos-patos');

            // Adicionando 9 cm ao nível da água do São Gonçalo antes de exibir
            let nivelAguaSaoGoncalo = data.nivel_agua_sao_goncalo ? parseInt(data.nivel_agua_sao_goncalo) + 9 : null;

            if (nivelAguaSaoGoncalo) {
                nivelAguaSaoGoncaloDiv.textContent = `Nível da água: ${nivelAguaSaoGoncalo} cm`;
            } else {
                nivelAguaSaoGoncaloDiv.textContent = 'Erro ao carregar os dados. Dados incompletos ou mal formatados para São Gonçalo.';
            }

            if (data.nivel_agua_lagoa_dos_patos) {
                nivelAguaLagoaDosPatosDiv.textContent = `Nível da água: ${data.nivel_agua_lagoa_dos_patos} cm`;
            } else {
                nivelAguaLagoaDosPatosDiv.textContent = 'Erro ao carregar os dados. Dados incompletos ou mal formatados para Lagoa dos Patos.';
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            document.getElementById('nivel-agua-sao-goncalo').textContent = 'Erro ao carregar os dados. ' + error.message;
            document.getElementById('nivel-agua-lagoa-dos-patos').textContent = 'Erro ao carregar os dados. ' + error.message;
        });
});
