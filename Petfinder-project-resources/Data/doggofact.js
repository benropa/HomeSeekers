// error codes apis
https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCCUVL6CLdcHFE4urCHrNDz_9WqrsJ8LW4
var error = 'https://http.dog/[code].jpg'
var youtubeSearch = document.querySelector ('#form');
var API_KEY = "AIzaSyCCUVL6CLdcHFE4urCHrNDz_9WqrsJ8LW4"

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');


form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value;
  
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${"how to take care of a" + query}&key=AIzaSyCCUVL6CLdcHFE4urCHrNDz_9WqrsJ8LW4&type=video&maxResults=1`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Extract the video titles and thumbnails from the data
      // and display them on the page

const resultsContainer = document.getElementById('search-results');
const videos = data.items;
const videoList = document.createElement('ul');

videos.forEach(video => {
  const videoTitle = video.snippet.title;
  const videoThumb = video.snippet.thumbnails.default.url;
  const videoId = video.id.videoId;
  
  const videoItem = document.createElement('li');
  videoItem.innerHTML = `
    <img src="${videoThumb}">
    <a href="https://www.youtube.com/watch?v=${videoId}">${videoTitle}</a>
  `;
  
  videoList.appendChild(videoItem);
resultsContainer.appendChild(videoList);

    })})
  .catch(error => console.error(error));
});


