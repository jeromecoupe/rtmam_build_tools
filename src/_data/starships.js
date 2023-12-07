const ITEMS_PER_PAGE = 10;

function formatShips(ships) {
  let formattedShips = ships.map((ship) => {
    return {
      name: ship.name,
      class: ship.starship_class,
      manufacturer: ship.manufacturer,
    };
  });
  return formattedShips;
}

async function getShips(page = 1) {
  let response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
  let responseJson = await response.json();
  let data = {
    results: responseJson.results,
    total: responseJson.count,
  };
  return data;
}

async function init() {
  let allShips = [];
  let firstRequest = await getShips();
  let moreRequests = [];

  allShips = [...firstRequest.results];
  let totalResults = firstRequest.total;
  let additionalRequests = Math.ceil(totalResults / ITEMS_PER_PAGE) - 1;

  if (additionalRequests > 0) {
    for (let i = 1; i <= additionalRequests; i++) {
      let page = i + 1;
      let request = getShips(page);
      moreRequests.push(request);
    }

    let allMoreRequests = await Promise.all(moreRequests);

    allMoreRequests.forEach((item) => {
      allShips.push(...item.results);
    });
  }

  return formatShips(allShips);
}

module.exports = init;
