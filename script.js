document.addEventListener("DOMContentLoaded", function() {
    // Carregar os dados inicialmente
    loadData();

    // Configurar o intervalo para recarregar a página a cada 30 minutos
    setInterval(function() {
        console.log("Recarregando a página para atualizar os dados...");
        window.location.reload(true);  // Força a recarga da página limpando o cache
    }, 1800000);  // 1800000 milissegundos = 30 minutos
});

function loadData() {
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

            // Adicionando 9 cm ao nível da água do São Gonçalo antes de exibir
            let nivelAguaSaoGoncalo = data.nivel_agua_sao_goncalo ? parseInt(data.nivel_agua_sao_goncalo) + 9 : null;

            if (nivelAguaSaoGoncalo) {
                nivelAguaSaoGoncaloDiv.textContent = `Nível da água: ${nivelAguaSaoGoncalo} cm`;
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
}
