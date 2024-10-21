function exibir_feriados(feriados) {
    const resultado = document.getElementById('resultado');
    const feriadosPorMes = {};

    for (let feriado of feriados) {
        const [ano, mes] = feriado.date.split('-');
        if (!feriadosPorMes[mes]) feriadosPorMes[mes] = [];
        feriadosPorMes[mes].push(`${feriado.date.split('-').reverse().join('/')} - ${feriado.name}`);
    }

    resultado.innerHTML = `<p>Total de feriados: ${feriados.length}</p>`;

    const mesesOrdenados = Object.keys(feriadosPorMes).sort((a, b) => a - b);

    for (let mes of mesesOrdenados) {
        const nomeMes = obterNomeMes(mes);
        const listaFeriados = feriadosPorMes[mes]
           .map(feriado => `<div class="feriado">${feriado}</div>`)
           .join('');
        
        resultado.innerHTML += `
            <div class="mes">
                <b>${nomeMes} (${feriadosPorMes[mes].length})</b>
                ${listaFeriados}
            </div>`;
    }
}

    function obterNomeMes(numero) {
        const nomesMeses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return nomesMeses[parseInt(numero) - 1];
}