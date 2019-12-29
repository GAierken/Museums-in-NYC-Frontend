let museumsUl = document.getElementById("museum")
fetch("http://localhost:3000/museums")
.then(r => r.json())
.then(museumArr => {
    museumArr.forEach(museum => {
        let museumLi = document.createElement("li")
            museumLi.className = "museum-name"
            museumLi.innerText = museum.name 
            museumsUl.append(museumLi)
    });
})