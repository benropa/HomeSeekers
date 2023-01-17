var key = 'Qpx9Cdz8eRObJnAZROa9eqV3JYgxfplkHml99RcBeHrf2E2xkD';
var secretKey = 'NSrjHbC9pfQcTciGAIOIsICgMRtQO3Q4h34XdMIt';
var zipCode = 54311;
var orgInfo = [[]];
var orgPhoto = [[]];
var animalArr=[[]];
var animalPhoto = [[]];
var pf = new petfinder.Client({apiKey: key, secret: secretKey});

const zipInput = document.getElementById('zipInput');
const zipBtn = document.getElementById('zipBtn');
const cardOneName = document.getElementById('cardOneName');

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
            cardOneName.textContent = animalArr[2][1];
        })
        .catch(function (error) {
            // Handle the error
        }); 
}

findOrganizations();
findAnimal();

zipBtn.addEventListener('click', function() {
    zipCode = zipInput.value;

    if(zipCode == null) {
        zipInput.textContent = "Invalid Zip Code";
    } else {
        findOrganizations();
        findAnimal();
    }
});
