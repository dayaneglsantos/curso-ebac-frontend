$(document).ready(function () {
  $("#tel").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00.000-000");

  $("form").validate({
    rules: {
      name: { required: true },
      tel: { required: true },
      email: { required: true },
      cep: { required: true },
      cpf: { required: true },
    },
    messages: {
      name: '<p class="alert">Nome é obrigatório</p>',
      email: '<p class="alert">E-mail é obrigatório</p>',
      tel: '<p class="alert">Telefone é obrigatório</p>',
      cpf: '<p class="alert">CPF é obrigatório</p>',
      cep: '<p class="alert">CEP é obrigatório</p>',
    },

    submitHandler: function (form) {
      console.log(form);
      $("input").val("");
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
