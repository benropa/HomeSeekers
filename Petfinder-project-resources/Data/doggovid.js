// error codes apis
// var error = 'https://http.dog/[code].jpg'

// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCCUVL6CLdcHFE4urCHrNDz_9WqrsJ8LW4

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');


form.addEventListener('submit', event => { 
  
  event.preventDefault();
  const Breed = input.value;
  
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