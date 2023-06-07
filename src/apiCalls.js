const acquireInfo = () => {
  return fetch(`https://digimon-api.vercel.app/api/digimon`)
  .then(response => {
      if(!response.ok) {
        throw new Error("Failed to fetch movies");
    }
    return response.json()
   })
}


export default acquireInfo;