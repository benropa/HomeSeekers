// error codes apis
// var error = 'https://http.dog/[code].jpg'

// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCCUVL6CLdcHFE4urCHrNDz_9WqrsJ8LW4


var animalArr;
var animalPhoto;
var orgInfo;
var orgPhoto;
var Breed;
const currentURL = new URL(window.location.toLocaleString()).searchParams;
const animalID = currentURL.get('animalID');

function load() {
  animalArr = localStorage.getItem('animalArr').split(',');
  animalPhoto = localStorage.getItem('animalPhoto').split(',');
  orgInfo = localStorage.getItem('orgInfo').split(',');
  orgPhoto = localStorage.getItem('orgPhoto').split(',');
}

load();

function searchAnimalArr() {
  for(var i = 0; i < animalArr.length; i+=8) {
    if(animalID == animalArr[i]) {
      document.getElementById('cardOneName').setAttribute("style", "background-image: url(" + animalPhoto[8*(i/8)+3*(i/8)-i] + ");");
      document.getElementById('animalOneName').textContent = animalArr[i+1]; 
      document.getElementById('animalOneSpeciesBreed').textContent = animalArr[i+5]+ " / " + animalArr[i+4]; 
      document.getElementById('animalOneGender').textContent = animalArr[i+3]; 
      document.getElementById('animalOneAge').textContent = animalArr[i+7]; 
      document.getElementById('animalOneSize').textContent = animalArr[i+6];
      Breed = animalArr[i+4];
    }
  }
}

searchAnimalArr();


  
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCkEBDbzLyH-LbB2FgMoSMaQ&q=${ Breed + " facts" }&key=AIzaSyCCUVL6CLdcHFE4urCHrNDz_9WqrsJ8LW4&maxResults=1`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

const resultsContainer = document.getElementById('search-results');
const videos = data.items;
const videoList = document.createElement('ul');

videos.forEach(video => {
  const videoId = video.id.videoId;
  const videoItem = document.createElement('li');
  const videoDis = document.createElement('li');
  videoItem.innerHTML = `
  <iframe width="420" height="315"
  src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen >
  </iframe>
  `;
  videoDis.innerHTML = `
    
    <p> Video link: https://www.youtube.com/channel/watch?v=${videoId} </p>
  `;

  
  videoList.appendChild(videoDis);
  videoList.appendChild(videoItem);
resultsContainer.appendChild(videoList);
    })})

});
