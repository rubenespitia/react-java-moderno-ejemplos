const getImagen = async()=>{
    try {
      const apiKey = 'cfkV7DVTUdrocdsBhqVfgE3eGUe9SUJE';
      const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      const {data} =await resp.json();
    
      const {url} = data.images.original;
    
      const img = document.createElement('img');
      img.src = url;
      document.body.appendChild(img);
    } catch (error) {
      console.log(error);
    }
  
  
  }
  
  getImagen().then(console.log)
  