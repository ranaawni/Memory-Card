console.log("conn")


$("document").ready(function(){


			$(".final").hide();

      $("#submitbtn").click(function(){
       

             if( $("#exampleInputEmail").val()=='admin@admin.com' && $("#exampleInputPassword").val()=='password') {
                       window.open("cards.html");
                     }
                 else {
                    alert("Please try again");
                 }
 
                 $("#logoutbtn").click(function() {
                  
                  window.open("signin.html");
                  $("form")[0].reset();
      
                 
            });
        });
      


var cards = document.querySelectorAll('.memory-card');
var hasFlippedCard=false;

var lockBoard=false;
var firstCard;
var secondCard;
// var score = 0;

function flipCard() {
	if (lockBoard) return;
	if(this===firstCard) return;
  this.classList.add('flip');

  if(!hasFlippedCard){
  	 // first click
  
    hasFlippedCard = true;
    firstCard = this;

    return;
  } 
    // second click
    hasFlippedCard = false;
    secondCard = this;

     checkForMatch();

}
function checkForMatch() {
  var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
     isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
restBoard();
}

function unflipCards() {
lockBoard=true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

   restBoard();
  }, 1500);


}

function restBoard(){
	hasFlippedCard,lockBoard=false,false;
	firstCard,secondCard=null,null;
}


(function shuffle(){
		cards.forEach(card=>{
let randomPos = Math.floor(Math.random()*12); 
card.style.order=randomPos;
	});
})();

cards.forEach(card => card.addEventListener('click', flipCard));


		});
