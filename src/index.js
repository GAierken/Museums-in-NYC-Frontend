Adaptor.allMuseums()
.then(museumsArr => {
    museumsArr.forEach(museum => {
        // console.log(museum)
        new museumJS(museum)
    });
    
})