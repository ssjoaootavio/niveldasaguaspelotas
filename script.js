document.addEventListener("DOMContentLoaded", function() {
    loadData();

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
            const lastUpdatedDiv = document.getElementById('lastUpdated');
            const nivelAguaSaoGoncaloDiv = document.getElementById('nivel-agua-sao-goncalo');
            const nivelAguaLagoaDosPatosDiv = document.getElementById('nivel-agua-lagoa-dos-patos');

            if (data.last_updated) {
                lastUpdatedDiv.textContent = `Última atualização: ${new Date(data.last_updated).toLocaleString('pt-BR')}`;
            } else {
                lastUpdatedDiv.textContent = 'Última atualização: Dados não disponíveis.';
            }

            if (data.nivel_agua_sao_goncalo) {
                nivelAguaSaoGoncaloDiv.textContent = `Nível da água: ${parseInt(data.nivel_agua_sao_goncalo) + 9} cm`;  // Adicionando 9 cm ao nível da água do São Gonçalo
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
            document.getElementById('lastUpdated').textContent = 'Erro ao carregar os dados: ' + error.message;
        });
}
