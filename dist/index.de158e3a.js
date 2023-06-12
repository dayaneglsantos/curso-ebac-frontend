const dataDoEvento = new Date("Apr 02, 2024 19:00");
const timeStampEvento = dataDoEvento.getTime();
const contagem = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();
    const distanciaAteEvento = timeStampEvento - timeStampAgora;
    const diaEmMS = 86400000;
    const horaEmMS = 3600000;
    const minutosEmMS = 60000;
    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMS);
    const horasAteEvento = Math.floor(distanciaAteEvento % diaEmMS / horaEmMS);
    const minutosAteEvento = Math.floor(distanciaAteEvento % horaEmMS / minutosEmMS);
    const segundosAteEvento = Math.floor(distanciaAteEvento % minutosEmMS / 1000);
    document.getElementById("regressiva").innerHTML = `${diasAteEvento} dia(s) ${horasAteEvento}hr(s) ${minutosAteEvento}min ${segundosAteEvento}seg`;
    if (distanciaAteEvento < 0) {
        clearInterval(contagem);
        document.getElementById("regressiva").innerHTML = `Evento já iniciado`;
    }
}, 1000);

//# sourceMappingURL=index.de158e3a.js.map
