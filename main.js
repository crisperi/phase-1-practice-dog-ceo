
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";



function dogImage() {

    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function (response) {
            return response.json();

        })
        .then(function (json) {
            const txt = json;
            txtLength= txt.message
            
            console.log(txt);
        
            console.log(txtLength);

             for(var i = 0;i<4;++i){
                  console.log(txtLength[i]);
                  imgCont = document.getElementById("dog-image-container");
                  imgElem = document.createElement("img");
                  imgElem.src = txtLength[i];
                  imgCont.appendChild(imgElem);
                 
              }


        })
}

dogImage();

function showImage(json) {
    console.log(json);

}