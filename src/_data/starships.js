async function getShips() {
  let response = await fetch("https://swapi.dev/api/starships");
  let responseJson = await response.json();
  let data = responseJson.results;
  return data;
}

async function init() {
  let allShips = await getShips();
  return allShips;
}

module.exports = init;
