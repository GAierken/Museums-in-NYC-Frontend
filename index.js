let museumsUl = document.getElementById("museum")
let museumDiv = document.getElementById("museum-detail")
console.log(museumDiv)
fetch("http://localhost:3000/museums")
.then(r => r.json())
.then(museumArr => {
    museumArr.forEach(museum => {
       turnJsonToHTML(museum)
    });
})

function turnJsonToHTML(museum) {
    let museumLi = document.createElement("li")
    museumLi.className = "museum-name"
    museumLi.innerText = museum.name 
    museumsUl.append(museumLi)

    museumLi.addEventListener("mouseenter", (evt) => {
        let infoDiv = document.createElement("div")
            infoDiv.className = "museum-info"
            infoDiv.innerText = "Museum Info"
            museumLi.append(infoDiv)

            infoDiv.addEventListener("click", (evt) => {
                    museumDiv.innerHTML = ""
                let museumCard = document.createElement("div")
                    museumCard.className = "museum-card"
                let museumH3 = document.createElement("h3")
                    museumH3.innerText = museum.name
                    museumCard.append(museumH3)
                let museumImg = document.createElement("img")
                    museumImg.src = museum.image_url
                    museumImg.alt = museum.name
                    museumImg.width = "400"
                    museumImg.height = "600"
                    museumImg.className = "center"
                    museumCard.append(museumImg)
                let museumDesP = document.createElement("p") 
                    museumDesP.innerText = museum.description  
                    museumCard.append(museumDesP)
                let museumHour = document.createElement("h5")
                    museumHour.innerText =`Hours: 
                    ${museum.hours}`
                    museumCard.append(museumHour)
                let museumWebpage = document.createElement("p")
                    museumWebpage.innerText =`Official Webpage: ${museum.homepage}`
                    museumCard.append(museumWebpage)
                    console.log(museumCard)
                    museumDiv.append(museumCard)
            })
        
    })
}