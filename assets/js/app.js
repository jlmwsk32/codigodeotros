document.addEventListener('DOMContentLoaded', function() {
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');//se quita #
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  data = await response.json(); //se agrega json
  console.log(data);
  $n.textContent = `${data.name}`;//se cambian comillas
  $b.textContent = `${data.blog}`;//se cambian comillas
  $l.textContent = `${data.location}`;//se cambian comillas
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
});