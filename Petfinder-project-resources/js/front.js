var key = 'Qpx9Cdz8eRObJnAZROa9eqV3JYgxfplkHml99RcBeHrf2E2xkD';
var secretKey = 'NSrjHbC9pfQcTciGAIOIsICgMRtQO3Q4h34XdMIt';
var url = href="./petDisplay.html?id=";
var zipCode = 54311;
var orgInfo = [[]];
var orgPhoto = [[]];
var animalArr=[[]];
var animalPhoto = [[]];
var pf = new petfinder.Client({apiKey: key, secret: secretKey});
var boxes = document.getElementById('boxes')



const zipInput = document.getElementById('inputZip');
const zipBtn = document.getElementById('zipBtn');
const cards = [[document.getElementById('cardOne'), document.getElementById('animalOneName'), document.getElementById('animalOneSpeciesBreed'), 
        document.getElementById('animalOneGender'), document.getElementById('animalOneAge'), document.getElementById('animalOneSize')],
        [document.getElementById('cardTwo'), document.getElementById('animalTwoName'), document.getElementById('animalTwoSpeciesBreed'), 
        document.getElementById('animalTwoGender'), document.getElementById('animalTwoAge'), document.getElementById('animalTwoSize')],
        [document.getElementById('cardThree'), document.getElementById('animalThreeName'), document.getElementById('animalThreeSpeciesBreed'), 
        document.getElementById('animalThreeGender'), document.getElementById('animalThreeAge'), document.getElementById('animalThreeSize')],
        [document.getElementById('cardFour'), document.getElementById('animalFourName'), document.getElementById('animalFourSpeciesBreed'), 
        document.getElementById('animalFourGender'), document.getElementById('animalFourAge'), document.getElementById('animalFourSize')]];

function findOrganizations() {
    pf.organization.search({location: zipCode})
        .then(resp => {
            // Do something with resp.data.organizations
            console.log(resp);
            for(var i = 0; i<resp.data.organizations.length; i++) {
                orgInfo[i]=[];
                orgPhoto[i]=[];
                orgInfo[i][0]=resp.data.organizations[i].id;
                orgInfo[i][1]=resp.data.organizations[i].name;
                orgInfo[i][2]=resp.data.organizations[i].url;
                orgInfo[i][3]=resp.data.organizations[i].address.city;
                orgInfo[i][4]=resp.data.organizations[i].address.state;
                if(resp.data.organizations[i].photos[0] === undefined) {
                    orgPhoto[i][0]='no logo';
                    orgPhoto[i][1]='no logo';
                    orgPhoto[i][2]='no logo';
                } else {
                    orgPhoto[i][0]=resp.data.organizations[i].photos[0].small;
                    orgPhoto[i][1]=resp.data.organizations[i].photos[0].medium;
                    orgPhoto[i][2]=resp.data.organizations[i].photos[0].large;
                }
            }
        });
}

function findAnimal() {
    pf.animal.search({location: zipCode})
        .then(function (response) {
            console.log(response);
            for(var i = 0; i < response.data.animals.length; i++) {
                animalArr[i]=[];
                animalPhoto[i]=[];
                animalArr[i][0] = response.data.animals[i].id;
                animalArr[i][1] = response.data.animals[i].name;
                animalArr[i][2] = response.data.animals[i].organization_id;
                animalArr[i][3] = response.data.animals[i].gender;
                animalArr[i][4] = response.data.animals[i].breeds.primary;
                animalArr[i][5] = response.data.animals[i].species;
                animalArr[i][6] = response.data.animals[i].size;
                animalArr[i][7] = response.data.animals[i].age;
                if(response.data.animals[i].photos[0] === undefined) {
                    animalPhoto[i][0] = 'no animal photo';
                    animalPhoto[i][1] = 'no animal photo';
                    animalPhoto[i][2] = 'no animal photo';
                } else {
                    animalPhoto[i][0] = response.data.animals[i].photos[0].small;
                    animalPhoto[i][1] = response.data.animals[i].photos[0].medium;
                    animalPhoto[i][2] = response.data.animals[i].photos[0].large;
                }
            }
            save();
            
            /*cards[0][0].setAttribute("value", animalArr[0][0]);
            cards[0][0].textContent = animalArr[0][1];
            cards[0][1].textContent = animalArr[0][5] + " / " + animalArr[0][4];
            cards[0][2].textContent = animalArr[0][3];
            cards[0][3].textContent = animalArr[0][7];
            cards[0][4].textContent = animalArr[0][6];*/

            for(var i = 0; i < cards.length; i++) {
                
                cards[i][0].setAttribute("value", animalArr[i][0]);
                cards[i][0].setAttribute("style", "background-image: url(" + animalPhoto[i][0] + ");");
                cards[i][1].textContent = animalArr[i][1];
                cards[i][2].textContent = animalArr[i][5] + " / " + animalArr[i][4];
                cards[i][3].textContent = animalArr[i][3];
                cards[i][4].textContent = animalArr[i][7];
                cards[i][5].textContent = animalArr[i][6];
 
            }
        })
        .catch(function (error) {
            // Handle the error
        }); 
}

function save() {
    localStorage.setItem('orgInfo', orgInfo);
    localStorage.setItem('orgPhoto', orgPhoto);
    localStorage.setItem('animalArr', animalArr);
    localStorage.setItem('animalPhoto', animalPhoto);
}

findOrganizations();
findAnimal();

zipBtn.addEventListener('click', function() {
    zipCode = zipInput.value;

    if(zipCode == null) {
        zipInput.setAttribute(placeholder, "Invalid Zip Code");
    } else {
        findOrganizations();
        findAnimal();
    }
});




$('.boxes').on('click', () => { 
  
  const Breed = "dog"
  console.log(Breed)
  
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