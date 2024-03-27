

var hpBar = document.querySelector(".hp");
var counter = 100;
var btnClick = document.getElementById('btn').addEventListener('click',function(){
    var RandomNumber = Math.floor(Math.random() * 15);
     counter = counter - RandomNumber;
    if(counter < 1){
        counter = 0;
    }
    setTimeout(function(){hpBar.style.backgroundColor = "green";},200);
    hpBar.style.width = counter + "%";
    hpBar.style.backgroundColor = "red";
    console.log(counter + " Damage taken: " + RandomNumber);
});
