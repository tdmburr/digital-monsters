const acquireInfo = (name) => {
  let endpoint;
  if (name) {
    endpoint = `https://digimon-api.vercel.app/api/digimon/name/${name}`
  } else {
    endpoint = 'https://digimon-api.vercel.app/api/digimon'
  }
  return fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load digimon data!");
      }
      return response.json()
    })
}


export default acquireInfo;