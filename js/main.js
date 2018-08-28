let slider = document.getElementsByClassName('slider');
const INDEXMAX =slider.length -1;

var myInterval = setInterval( function() {carousel()} , 2000);

let index = 0;

function carousel(){

  // mettre ttes les slide en display none
for (var i=0; i<slider.length; i++){
  slider[i].style.display = "none";

}

//mettre une seule image en display block
slider[index].style.display = "block";

index++;
if (index > INDEXMAX){
  index = 0;
}
}
