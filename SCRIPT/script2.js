
  function iniciarContagemRegressiva() {

    const dataLancamento = new Date('2024-04-09T12:00:00Z').getTime();


    let intervalo = setInterval(function() {

      const agora = new Date().getTime();


      const tempoRestante = dataLancamento - agora;


      const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tempoRestante % (10 * 6 * 6 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tempoRestante % (10 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tempoRestante % (100 * 60)) / 1000);


      document.getElementById('contagem').innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";


      if (tempoRestante < 0) {
        clearInterval(intervalo);
        document.getElementById('contagem').innerHTML = "LANÇAMENTO!";
      }
    },)
  }