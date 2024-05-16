document.addEventListener("DOMContentLoaded", function() {
    fetch('nivel_agua.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const nivelAguaSaoGoncaloDiv = document.getElementById('nivel-agua-sao-goncalo');
            const nivelAguaLagoaDosPatosDiv = document.getElementById('nivel-agua-lagoa-dos-patos');

            if (data && data.nivel_agua_sao_goncalo) {
                nivelAguaSaoGoncaloDiv.textContent = `Nível da água: ${data.nivel_agua_sao_goncalo} cm`;
            } else {
                nivelAguaSaoGoncaloDiv.textContent = 'Erro ao carregar os dados. Dados incompletos ou mal formatados para São Gonçalo.';
            }

            if (data && data.nivel_agua_lagoa_dos_patos) {
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
