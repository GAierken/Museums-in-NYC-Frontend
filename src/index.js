
///// search
let searchInput = document.createElement("input")
searchInput.type = "text"
searchInput.id = 'search-bar'
searchInput.placeholder = "Search for Museum"

document.body.prepend(searchInput)

searchInput.addEventListener("input", (evt) => {
    museumDetail.innerHTML = ''
  let thingTyped = evt.target.value


  let allMuseums = document.querySelectorAll("li.list-group-item")

  allMuseums.forEach((museumLi) => {
    
    if (museumLi.innerText.toLowerCase().includes(thingTyped.toLowerCase())) {
      museumLi.style.display = ""
    } else {
      museumLi.style.display = "none"
    }
  })

})
let welcomeLine = document.createElement('div')
    welcomeLine.id = 'welcome-line'
    welcomeLine.innerText = "WELCOME TO NEW YORK! LET'S VISIT MUSEUMS!"
    museumDetail.append(welcomeLine)
/////// get museums
Adaptor.allMuseums()
.then(museumsArr => {
    museumsArr.forEach(museum => {

        new museumJS(museum)
    });
    
})