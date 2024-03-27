

var hpBar = document.querySelector(".hp");
var counter = 100;
var btnClick = document.getElementById('btn').addEventListener('click',function(){
    var RandomNumber = Math.floor(Math.random() * 15);
     counter = counter - RandomNumber;
    if(counter < 1){
        counter = 0;
    }
    hpBar.style.width = counter + "%";
    console.log(counter + " Damage taken: " + RandomNumber);
});
