const leftRow = document.querySelector('.js-left-row') as HTMLDivElement
const rightRow = document.querySelector('.js-right-row') as HTMLDivElement
const button = document.querySelector<HTMLButtonElement>(".js-load-btn")

interface Characters {
  name: string,
  image: string,
  status: string,
  species: string,
  location: {
    name: string,
  }
  episode: {
    [key: number] : string,
  }
}

fetch('https://rickandmortyapi.com/api/character/')
  .then((response) => response.json())
  .then(data => makeCards(data.results));


const makeCards = <T extends Characters>(characters: T[]) => {

  //LEFT ROW
  characters.splice(0, 3).forEach(character => {
    const box = document.createElement("div");
    box.classList.add("card");
    leftRow.appendChild(box);

    const imageSide = document.createElement("div")
    imageSide.classList.add("img-side");
    box.appendChild(imageSide);

    const image = document.createElement("img") as HTMLImageElement
    image.classList.add("image");
    image.src = `${character.image}`
    imageSide.appendChild(image);

    const text = document.createElement("div");
    text.classList.add("text");
    box.appendChild(text);

    const mainTitle = document.createElement("h3");
    mainTitle.innerHTML = `${character.name}`;
    mainTitle.classList.add("main-title");
    text.appendChild(mainTitle);

    const statusBox = document.createElement("div");
    statusBox.classList.add("statusBox");
    text.appendChild(statusBox);

    const statusSymbol = document.createElement("div");
    statusBox.appendChild(statusSymbol);

    // status color
    if (character.status === 'Alive') {
      statusSymbol.classList.add("status__alive")
    } else if (character.status === 'Dead') {
      statusSymbol.classList.add("status__dead")
    } else if (character.status === 'unknown') {
      statusSymbol.classList.add("status__unknown")
    }

    const status = document.createElement("h3");
    status.innerHTML = `${character.status} - ${character.species}`;
    status.classList.add("status");
    statusBox.appendChild(status);

    const lastKnownLocation = document.createElement("span");
    lastKnownLocation.innerHTML = "Last known location:";
    lastKnownLocation.classList.add("span-text");
    text.appendChild(lastKnownLocation);

    const location = document.createElement("h2");
    location.innerHTML = `${character.location.name}`;
    location.classList.add("sub-title");
    text.appendChild(location);

    const episodeTitle = document.createElement("span");
    episodeTitle.innerHTML = "First seen in:";
    episodeTitle.classList.add("span-text");
    text.appendChild(episodeTitle);

    const episodeName = document.createElement("h2");
    episodeName.innerHTML = "Episode Name";
    episodeName.classList.add("sub-title");
    text.appendChild(episodeName);

    
  })  


  // RIGHT ROW
  characters.splice(0, 3).forEach(character => {
    const box = document.createElement("div");
    box.classList.add("card");
    rightRow.appendChild(box);

    const imageSide = document.createElement("div")
    imageSide.classList.add("img-side");
    box.appendChild(imageSide);

    const image = document.createElement("img") as HTMLImageElement
    image.classList.add("image");
    image.src = `${character.image}`
    imageSide.appendChild(image);

    const text = document.createElement("div");
    text.classList.add("text");
    box.appendChild(text);

    const mainTitle = document.createElement("h3");
    mainTitle.innerHTML = `${character.name}`;
    mainTitle.classList.add("main-title");
    text.appendChild(mainTitle);

    const statusBox = document.createElement("div");
    statusBox.classList.add("statusBox");
    text.appendChild(statusBox);

    const statusSymbol = document.createElement("div");
    statusBox.appendChild(statusSymbol);

    // status color
    if (character.status === 'Alive') {
      statusSymbol.classList.add("status__alive")
    } else if (character.status === 'Dead') {
      statusSymbol.classList.add("status__dead")
    } else if (character.status === 'unknown') {
      statusSymbol.classList.add("status__unknown")
    }

    const status = document.createElement("h3");
    status.innerHTML = `${character.status} - ${character.species}`;
    status.classList.add("status");
    statusBox.appendChild(status);

    const lastKnownLocation = document.createElement("span");
    lastKnownLocation.innerHTML = "Last known location:";
    lastKnownLocation.classList.add("span-text");
    text.appendChild(lastKnownLocation);

    const location = document.createElement("h2");
    location.innerHTML = `${character.location.name}`;
    location.classList.add("sub-title");
    text.appendChild(location);

    const episodeTitle = document.createElement("span");
    episodeTitle.innerHTML = "First seen in:";
    episodeTitle.classList.add("span-text");
    text.appendChild(episodeTitle);

    const episodeName = document.createElement("h2");
    episodeName.innerHTML = "Episode Name";
    episodeName.classList.add("sub-title");
    text.appendChild(episodeName);

  })  


  // LOAD MORE BUTTON
  button?.addEventListener('click', () => {

    //LEFT ROW
    characters.splice(0, 7).forEach(character => {
      const box = document.createElement("div");
      box.classList.add("card");
      leftRow.appendChild(box);
  
      const imageSide = document.createElement("div")
      imageSide.classList.add("img-side");
      box.appendChild(imageSide);
  
      const image = document.createElement("img") as HTMLImageElement
      image.classList.add("image");
      image.src = `${character.image}`
      imageSide.appendChild(image);  
  
      const text = document.createElement("div");
      text.classList.add("text");
      box.appendChild(text);
  
      const mainTitle = document.createElement("h3");
      mainTitle.innerHTML = `${character.name}`;
      mainTitle.classList.add("main-title");
      text.appendChild(mainTitle);

      const statusBox = document.createElement("div");
      statusBox.classList.add("statusBox");
      text.appendChild(statusBox);

      const statusSymbol = document.createElement("div");
      statusBox.appendChild(statusSymbol);

      // status color
    if (character.status === 'Alive') {
      statusSymbol.classList.add("status__alive")
    } else if (character.status === 'Dead') {
      statusSymbol.classList.add("status__dead")
    } else if (character.status === 'unknown') {
      statusSymbol.classList.add("status__unknown")
    }
  
      const status = document.createElement("h3");
      status.innerHTML = `${character.status} - ${character.species}`;
      status.classList.add("status");
      statusBox.appendChild(status);
  
      const lastKnownLocation = document.createElement("span");
      lastKnownLocation.innerHTML = "Last known location:";
      lastKnownLocation.classList.add("span-text");
      text.appendChild(lastKnownLocation);
  
      const location = document.createElement("h2");
      location.innerHTML = `${character.location.name}`;
      location.classList.add("sub-title");
      text.appendChild(location);
  
      const episodeTitle = document.createElement("span");
      episodeTitle.innerHTML = "First seen in:";
      episodeTitle.classList.add("span-text");
      text.appendChild(episodeTitle);
  
      const episodeName = document.createElement("h2");
      episodeName.innerHTML = "Episode Name";
      episodeName.classList.add("sub-title");
      text.appendChild(episodeName);
    })  
    
    //RIGHT ROW
    characters.splice(0, 7).forEach(character => {
      const box = document.createElement("div");
      box.classList.add("card");
      rightRow.appendChild(box);
  
      const imageSide = document.createElement("div")
      imageSide.classList.add("img-side");
      box.appendChild(imageSide);
  
      const image = document.createElement("img") as HTMLImageElement
      image.classList.add("image");
      image.src = `${character.image}`
      imageSide.appendChild(image);

      const text = document.createElement("div");
      text.classList.add("text");
      box.appendChild(text);
  
      const mainTitle = document.createElement("h3");
      mainTitle.innerHTML = `${character.name}`;
      mainTitle.classList.add("main-title");
      text.appendChild(mainTitle);
  
      const statusBox = document.createElement("div");
      statusBox.classList.add("statusBox");
      text.appendChild(statusBox);

      const statusSymbol = document.createElement("div");
      statusBox.appendChild(statusSymbol);

      // status color
    if (character.status === 'Alive') {
      statusSymbol.classList.add("status__alive")
    } else if (character.status === 'Dead') {
      statusSymbol.classList.add("status__dead")
    } else if (character.status === 'unknown') {
      statusSymbol.classList.add("status__unknown")
    }
  
      const status = document.createElement("h3");
      status.innerHTML = `${character.status} - ${character.species}`;
      status.classList.add("status");
      statusBox.appendChild(status);
  
      const lastKnownLocation = document.createElement("span");
      lastKnownLocation.innerHTML = "Last known location:";
      lastKnownLocation.classList.add("span-text");
      text.appendChild(lastKnownLocation);
  
      const location = document.createElement("h2");
      location.innerHTML = `${character.location.name}`;
      location.classList.add("sub-title");
      text.appendChild(location);
  
      const episodeTitle = document.createElement("span");
      episodeTitle.innerHTML = "First seen in:";
      episodeTitle.classList.add("span-text");
      text.appendChild(episodeTitle);
  
      const episodeName = document.createElement("h2");
      episodeName.innerHTML = "Episode Name";
      episodeName.classList.add("sub-title");
      text.appendChild(episodeName);

    })  
    
  })
}
