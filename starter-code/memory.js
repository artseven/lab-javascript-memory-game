  var MemoryGame = function() {
    this.Cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
  this.picked_cards  = [ ];
  this.pairs_clicked = 0;
  this.pairs_guessed = 0;
  this._shuffleCard();
};


// this function just takes the array of cards above and shuffles them into a random order
MemoryGame.prototype._shuffleCard = function() {
  var counter = this.Cards.length;

  while (counter > 0) {
  var  index = Math.floor(Math.random() * counter);
    counter--;
  var  temp = this.Cards[counter];
    this.Cards[counter] = this.Cards[index];
    this.Cards[index] = temp;
  }
  return;
};

function didIwin(){
  if (theGame.pairs_guessed ==12)
  alert ('woohoo, YOU WON');
}

MemoryGame.prototype.selectCard = function(card){
  console.log(card);
  if(this.picked_cards.length === 0) {
     this.picked_cards.push(card);

  }
    else if (this.picked_cards.length == 1) {
      this.picked_cards.push(card);
      $('back').addClass('blocked');
      this.pairs_clicked++;

      if(this.picked_cards[0].id == this.picked_cards[1].id) {
        console.log('correct');
        // set the picked cards array empty
        this.picked_cards= [];
        // add one to correct guesses count
        this.pairs_guessed++;
        // remove the blocked class from everything
        $('.back').removeClass('blocked');
        //success stuff
        didIwin();
      }
      else {
        console.log('incorrect');
        // empty the picked_cards array

        // change them back to blue blueBoxes
        this.picked_cards[0].style.background='#456783';
        this.picked_cards[1].style.background='#456783';
        this.picked_cards=[];
        // this.picked_cards[0]
        var self = this;
        setTimeout(function(){ alert("Hint!"); }, 5000);
        // remove the class blocked
        // $(.back).removeClass('blocked');
        //failure stuff
      }

    }

};

// var firstChoice='';
// var secondChoice='';
// $(".pic").click(function() {
//   if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {count++;
//     $(this).children("img").show();
//     $(this).children("img").addClass("face-up");
//   }
//   if (count === 1 ) {
//       firstChoice = $(this).children("img").attr("src");
//     }  else {
//        secondChoice = $(this).children("img").attr("src");
//     }
//   if (firstChoice === secondChoice) {
//      console.log("match");
//      $("pic").children("img[src='" + secondChoice + "']").addClass("match");
//      }
// var memoryGame="";
// memoryGame = new MemoryGame();
// var the_card = memoryGame.Cards[8];
// $('.pic').prop("src",("img/"+ the_card.img));
//
// var count=0;
//
// var match=0;
//
// var output = "<pic>";
// for (var i = 0; i <MemoryGame.Cards.length; i++) {
//   output += "<div>";
//   output += "<img src = '" + this.Cards[i] + "'/>";
//   output += "</li>";
// }
// output += "</ol>";
// document.getElementById("pic").innerHTML = output;
// $("img").hide();
// function choose(card) {
//             if (clicks === 2) {
//                 return;
//             }
//             if (clicks === 0) {
//                 firstchoice = card;
//                 //document.images[card].src= this.Cards.[img];
//                 clicks = 1;
//             } else {
//                 clicks = 2;
//                 secondchoice = card;
//                 //document.images[card].src = this.Cards[card];
//                 timer = setInterval(check(), 1000);
//             }
//         }
//
// function check() {
//     clearInterval(timer);
//     clicks = 0;
//     if (card[secondchoice] == card[firstchoice]) {
//         match++;
//         document.getElementById("matches").innerHTML = match;
//     } else {
//         document.images[firstchoice].src = backcard;
//         document.images[secondchoice].src = backcard;
//         return;
//     }
// }
//
// $("card").flip('toggle');
// $(".pic").flip('toggle');
// function flipTile() {


// pic.addEventListener("click", function(){
//     document.getElementById("pic").innerHTML = "Hello World";

// pic.addEventListener(('click'), function flipTile()[]);
$(document).ready(function(){
  var theGame = new MemoryGame();
  renderShuffledCards();



function renderShuffledCards() {
  var blueBoxes = $(".back");
  for (var i=0; i<=24; i++) {

    var theBox = blueBoxes.eq(i);
    theBox.attr("id",theGame.Cards[i].img);
    }
  }

$('.back').on('click', function(e){
  $(this).css('background',"url(img/" + $(this).attr("id") + ")");
    theGame.selectCard(this);
    $('#pairs_clicked').text = theGame.pairs_clicked;
    $('#pairs_guessed').text = theGame.pairs_guessed;
});
});
