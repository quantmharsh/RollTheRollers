'use strict';

//selecting  id and clsses for setting it to initial values  when game is opened first time
const Score0EL = document.querySelector('#score--0');
const Score1EL=document.getElementById('score--1');
const DiceEL=document.querySelector('.dice');
const player0EL=document.querySelector('.player--0');
const player1EL=document.querySelector('.player--1');

// Score0EL.textContent =0;
// Score1EL.textContent=0;
// DiceEL.classList.add('hidden');




//Rolling dice event

 const diceroll=document.querySelector('.btn--roll');
 const  newgame=document.querySelector('.btn--new');
 const hold=document.querySelector('.btn--hold');
 const Current0EL=document.querySelector('#current--0');  //since it is ID so #
 const Current1EL=document.getElementById('current--1');   // in getElementById we do not require #
//creating array scores to store score of player 0 and 1
let scores ,CurrentScore,activePlayer,playing;

//this is the function which consist initial condition when web page is refresed or new game button is clicked
const init=function()
{
 scores = [0,0];
CurrentScore=0;
 activePlayer=0;
 playing =true;
 Score0EL.textContent =0;
Score1EL.textContent=0;
DiceEL.classList.add('hidden');
Current0EL.textContent =0;
Current1EL.textContent=0;
player0EL.classList.remove('player--winner');
player1EL.classList.remove('player--winner');
player0EL.classList.add('player--active');
player1EL.classList.remove('player--active');

};
init();
  //creating switchplayer function because we want to change player from multiple buttons or conditions so to stop ourself from 
  //writing same code as multiplw eplaces we are using it as a function
  const SwitchPlayer=function()
  {
    document.getElementById(`current--${activePlayer}`).textContent=0;
    CurrentScore=0;
  activePlayer = activePlayer === 0?1:0;
  //changing background colour
  //toggle is used to change the current state this means if player0 has white background then it will be converted to pink 
  //and player1 pink background will change into white
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
  }

 //1.rolling a dice 
 
 diceroll.addEventListener('click', function()
 {
  if(playing)
  {
   const dicevalue= Math.trunc(Math.random()*6)+1;
   console.log(dicevalue);

   //2/displaying dice to roll
   DiceEL.classList.remove('hidden');

//3.displaying  dice of value which is rolled
DiceEL.src=`dice-${dicevalue}.png`;


  //4. storing the rolled dice value in current score if it is not 1
  if(dicevalue!==1)
  {
    CurrentScore=CurrentScore+dicevalue;
    // updating score in  active player
    document.getElementById(`current--${activePlayer}`).textContent=CurrentScore;
    // Current0EL.textContent =CurrentScore;
  }
     //5. switching player and reseting current score


  else{
    //resseting current score of active player  value to zero before changing  ctiveplayer to 1 or 0 so that in next turn it starts from 0 again.
    //switching player
    // document.getElementById(`current--${activePlayer}`).textContent=0;
    //     CurrentScore=0;
    //   activePlayer = activePlayer === 0?1:0;
    //   //changing background colour
    //   //toggle is used to change the current state this means if player0 has white background then it will be converted to pink 
    //   //and player1 pink background will change into white
    //   player0EL.classList.toggle('player--active');
    //   player1EL.classList.toggle('player--active');
    SwitchPlayer();

  }

}  
 });


  hold.addEventListener('click' ,function(){
    if(playing)
{
   //1.storing the current value in score
   scores[activePlayer]=scores[activePlayer]+CurrentScore;
   document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  }

  //2.checking whether socre is equal to 100 or not
  if(scores[activePlayer]>= 100)
  {
       //changing background color to black  
       //selecting player and then using classlist adding class player--winner which have black color;
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       //removing active-player class which consist of background color white
       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
       
       playing=false;
  }
   
   else{
    //swithcing player
   SwitchPlayer();
   }
  

  });
  // new game on clicking 
  newgame.addEventListener('click', init);

  const modal=document.querySelector('.modal');
  const  btnCloseModal=document.querySelector('.close-modal');
  modal.classList.remove('hidden');
  //closing modal
  btnCloseModal.addEventListener('click',function(){

    modal.classList.add('hidden');
  })

   


