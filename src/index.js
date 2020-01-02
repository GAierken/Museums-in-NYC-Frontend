
///// search
let searchInput = document.createElement("input")
searchInput.type = "text"
searchInput.id = 'search-bar'
searchInput.placeholder = "Search for Museum"

document.body.prepend(searchInput)

searchInput.addEventListener("input", (evt) => {
    museumDetail.innerHTML = ''
  let thingTyped = evt.target.value


  let allMuseums = document.querySelectorAll("li.museum")

  allMuseums.forEach((museumLi) => {
    
    if (museumLi.innerText.toLowerCase().includes(thingTyped.toLowerCase())) {
      museumLi.style.display = ""
    } else {
      museumLi.style.display = "none"
    }
  })

})

/////// search
Adaptor.allMuseums()
.then(museumsArr => {
    museumsArr.forEach(museum => {
        // console.log(museum)
        new museumJS(museum)
    });
    
})