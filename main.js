$(document).ready(function () {
  $("#cep").mask("00000-000");
  $("#btn-busca-cep").click(function () {
    const cep = $("#cep").val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json`;
    const botao = $(this);

    $(botao).find("i").addClass("d-none");
    $(botao).find("span").removeClass("d-none");

    // $.ajax(endpoint).done(function (resposta) {
    //   const logradouro = resposta.logradouro;
    //   const bairro = resposta.bairro;
    //   const cidade = resposta.cidade;
    //   const estado = resposta.estado;
    //   const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

    //   $("#endereco").val(endereco);

    //   setTimeout(function () {
    //     $(botao).find("i").removeClass("d-none");
    //     $(botao).find("span").addClass("d-none");
    //   }, 8000);
    // });

    fetch(endpoint)
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (json) {
        const logradouro = json.logradouro;
        const bairro = json.bairro;
        const cidade = json.cidade;
        const estado = json.estado;
        const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        $("#endereco").val(endereco);

        setTimeout(function () {
          $(botao).find("i").removeClass("d-none");
          $(botao).find("span").addClass("d-none");
        }, 8000);
      });
  });
});
