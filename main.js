document.addEventListener("DOMContentLoaded", function () {
  const xhttp = new XMLHttpRequest();
  const endpoint = "https://api.github.com/users/dayaneglsantos";

  fetch(endpoint)
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (json) {
      const followers = json.followers;
      const following = json.following;
      const rep = json.public_repos;

      const repositorios = (document.getElementById("repositorios").innerText =
        rep);
      const seguidores = (document.getElementById("seguidores").innerText =
        followers);
      const seguindo = (document.getElementById("seguindo").innerText =
        following);
    });
});
