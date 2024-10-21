const urlBase = 'https://api.nobelprize.org/v1/prize.json';

    function consultarNobel() {
        const ano = document.getElementById('ano').value;
        const urlConsulta = `${urlBase}?year=${ano}`;
        const resultado = document.getElementById('resultado');

        resultado.innerHTML = 'Carregando...';

        fetch(urlConsulta)
            .then(response => response.json())
            .then(dados => exibirResultado(dados, ano))
            .catch(() => {
                resultado.innerHTML = 'Erro ao buscar os dados. Tente novamente.';
            });
    }

    function exibirResultado(dados, ano) {
        const premios = dados.prizes;
        const resultado = document.getElementById('resultado');

        if (premios.length === 0) {
            resultado.innerHTML = `Não foram encontrados prêmios para o ano ${ano}.`;
            return;
        }

        resultado.innerHTML = ''; // Limpa resultados anteriores

        premios.forEach(premio => {
            const categoria = premio.category.charAt(0).toUpperCase() + premio.category.slice(1);
            const motivacao = premio.laureates.map(laureado => laureado.motivation).join('; ');
            const laureados = premio.laureates.map(laureado => laureado.firstname + ' ' + laureado.surname).join(', ');

            const div = document.createElement('div');
            div.innerHTML = `
                <h3>Categoria: ${categoria}</h3>
                <p><b>Laureado(s):</b> ${laureados}</p>
                <p><b>Motivação:</b> ${motivacao}</p>
            `;
            resultado.appendChild(div);
        });
    }