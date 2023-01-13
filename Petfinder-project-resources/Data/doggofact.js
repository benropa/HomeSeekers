async function start() {
  const response = await fetch( "" )
  const data = await response.json()
  CreateFactList(data.message)
}

start()

function CreateFactList(factList) {
  document.getElementById("Drop").innerHTML = `
  <select onchange="loadByBreed(this.value)" > 
      <option> Choose something </option> 
      
      ${Object.keys(factList).map(function(fact) { 
          return `<option>${fact}</option>`

}).join('')}
    </select>
  `   
}

function loadByBreed (fact){
  alert
}
