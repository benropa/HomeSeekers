// error codes apis
// var error = 'https://http.dog/[code].jpg'

// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCCUVL6CLdcHFE4urCHrNDz_9WqrsJ8LW4

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

const resultsContainer = document.getElementById('search-results');
const videos = data.items;
const videoList = document.createElement('ul');

videos.forEach(video => {
  const videoTitle = video.snippet.title;
  const videoThumb = video.snippet.thumbnails.default.url;
  const videoId = video.id.videoId;
  
  const videoItem = document.createElement('li');
  videoItem.innerHTML = `
    
    <a href="https://www.youtube.com/watch?v=${videoId}">${videoTitle}<img src="${videoThumb}"></a>
  `;
  
  videoList.appendChild(videoItem);
resultsContainer.appendChild(videoList);

    })})

});


