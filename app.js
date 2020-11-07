suit = '☃☂☁☀'.split('');
let number = 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',');
let deck=[];
let turn=0;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//Deal the Cards
function deal(){
	let t=0;
	do {  
		//remove last card from deck
		let card = deck.splice(-1,1).toString();
    
    //remove first character and then assign number values for cards J=11,Q=12,K=13,A=14
    let cardval = card.substr(1).replace("J","11").replace("Q","12").replace("K","13").replace("A","14");
    
   
    //consider using document.querySelectorAll('.players')[t]
    document.querySelector('#player'+t).innerHTML+='<div class="card" data-cardvalue="'+cardval+'" data-player="'+t+'" rel="'+card+'" onclick="toss(this)"></div>';
	    t=Number(!t); //flip from 0 to 1 since there are 2 players
	}
	while (deck.length > 0);	
}

function toss(card){
  //only allow this to run if its the right players turn
  let check = "player"+turn;
  
  if(document.querySelectorAll("#middle .card").length<2 && card.parentElement.id==check){
    let fragment = document.createDocumentFragment();
    fragment.appendChild(card);
    card.innerHTML=card.getAttribute("rel");
    
    document.getElementById("middle").appendChild(fragment);     
    turn=Number(!turn); 
    //now need to flip the cards, show what they are, calculate who won and track score accordingly!
    setTimeout(function(){ 

      if(document.querySelectorAll("#middle .card").length==2){

        let c0=Number(document.querySelectorAll("#middle .card")[0].dataset.cardvalue);
        let c1=Number(document.querySelectorAll("#middle .card")[1].dataset.cardvalue);

        //first check if its equal
        if(c0==c1){
          //TIE gives everyone a point instead of keeping them and letting winner take all!
          document.querySelector("#player0_score span").innerHTML++;
          document.querySelector("#player1_score span").innerHTML++;
          
        } else {
          if(c0>c1){
            document.querySelector("#player0_score span").innerHTML++; //cool how ++ works on a stringbut += does not
          } else {
            document.querySelector("#player1_score span").innerHTML++;
          }
        }

        document.querySelectorAll("#middle .card").forEach(e => e.parentNode.removeChild(e)); //remove cards

      }
    }, 6000);
    
  }
}

//Build the deck
suit.forEach(function(s){
  number.forEach(function(n){
    deck.push(s+''+n);
  });
});

//shuffle deck 
shuffle(deck);

deal();