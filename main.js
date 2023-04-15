$(document).ready(function () {
  $("form button").click(function (e) {
    e.preventDefault();

    const newTask = $("form input").val();
    const addNewTask = $('<li style="display:block"></li>').appendTo("ul");
    $(`<p> ${newTask}</p>`).appendTo(addNewTask);

    $("form input").val("");
  });

  $("ul").on("click", "li p", function () {
    $(this).toggleClass("rabiscado");
    console.log("newTask");
  });
});
