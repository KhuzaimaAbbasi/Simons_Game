var buttoncolor=['red','blue','green','yellow'];
var gamepattern=[];
var chosen_color_pattern=[];

let level=0;

var started=false;

document.addEventListener("keydown",function(e)

{

    if(e.key=="a" && started==false)
    
    {
    var heading=document.getElementById('level-title')

    heading.innerHTML="Level "+level;

    started=true;

    sequence();

    }
})


function sequence()

{

    level++;
    var heading=document.getElementById('level-title')
    heading.innerHTML="Level: "+level;
   chosen_color_pattern=[];
var num=Math.floor(Math.random()*4);
var color_chosen=buttoncolor[num];
gamepattern.push(color_chosen);

var temp=document.getElementById(color_chosen);

Pressed(temp);

AddSound(color_chosen);

}



for( var i=0 ; i<document.querySelectorAll('.btn').length;i++)
{
    document.querySelectorAll('.btn')[i].addEventListener("click",function()
    
    {
            
        var userChosenColor=this.id;

        AddSound(userChosenColor);
        Pressed(this);

        chosen_color_pattern.push(userChosenColor);



       checkAnswer(chosen_color_pattern.length-1)
    

    })



}

function checkAnswer(index){

    if(gamepattern[index]==chosen_color_pattern[index])

    {

        if (chosen_color_pattern.length === gamepattern.length){

            
            setTimeout(function () {
              sequence();
            }, 1000);
    

    }


}

else
{ 
        var audio= new Audio('sounds/wrong.mp3');

        audio.play();

    document.body.classList.add('game-over');

    setTimeout(function()
    {

        document.body.classList.remove('game-over');

    }, 500);

    Startover();
    
}

}


function Startover()

{
    var heading=document.getElementById('level-title')
    heading.innerHTML="Press A Key to Start";
    started=false;

    level=0;
  gamepattern=[];
  chosen_color_pattern=[];
    

}


function AddSound(color_chosen)

{

    switch(color_chosen)

{
    case "yellow":
        var audio= new Audio("sounds/yellow.mp3");
        audio.play();
        break;
    case "blue":
        var audio= new Audio("sounds/blue.mp3");
        audio.play();
        break;
    case "green":
        var audio= new Audio("sounds/green.mp3");
        audio.play();
        break;
    case "red":
        var audio= new Audio("sounds/red.mp3");
        audio.play();
        break;


    default:
}
}

function Pressed(button)

{
    button.classList.add("pressed");

    setTimeout(function()
    
    {
        button.classList.toggle("pressed");
    
    },
    100
    )


}