const acquireInfo = (stage) => {
  return fetch(`https://digimon-api.vercel.app/api/digimon/${stage}`)
  .then(response => {
      if(!response.ok) {
        throw new Error("Failed to load digimon data!");
    }
    return response.json()
   })
}


export default acquireInfo;