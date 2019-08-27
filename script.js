//Fonctonnalité 1
let tagFooter = document.querySelector('footer');
let i = 1
tagFooter.addEventListener("click",function(){
	console.log('Clique n°:' +i);
	i++;
});

//Fonctionnalité 2
let navParent = document.getElementsByClassName('navbar-toggler')[0];
let navCollapse = document.getElementById('navbarHeader');
navParent.addEventListener('click',function(){
	navCollapse.classList.toggle('collapse');
});

//Fonctionnalité 3
let textCard = document.getElementsByClassName('card-text')[0];
let editCard = document.getElementsByClassName('btn-outline-secondary')[0];
console.log(textCard.innerHTML);
editCard.addEventListener('click',function(){
	textCard.style.color = "red";
});

//Fonctionnalité 4
let textCard2 = document.getElementsByClassName('card-text')[1];
let editCard2 = document.getElementsByClassName('btn-outline-secondary')[1];
console.log(textCard2.innerHTML);
editCard2.addEventListener('click',function(){
	if(textCard2.style.color === "green"){
		textCard2.style.color = "";
	}
	else{
		textCard2.style.color = "green";
	}
});

//Fonctionnalité 5

let head = document.querySelector("header");
let link = true;
head.addEventListener('dblclick',function(){
	if (link) {
    	document.querySelector("link").disabled = true;
    	link = false;
    }
     else {
        document.querySelector("link").disabled = false;
        link = true;
    }
});

//Fonctionnalité 6

let cards = document.getElementsByClassName('col-md-4');
let buttons = document.getElementsByClassName('btn-success');

for(let i = 0; i<cards.length;i++){
	buttons[i].addEventListener('mouseover', function() {
      if (cards[i].getElementsByClassName('card-img-top')[0].style.width === "20%") {
        cards[i].getElementsByClassName('card-img-top')[0].style.width = "100%";
        cards[i].getElementsByClassName('card-text')[0].style.display = "block";
      } else {
          cards[i].getElementsByClassName('card-img-top')[0].style.width = "20%";
          cards[i].getElementsByClassName('card-text')[0].style.display = "none";
        }
    });

}

//Fonctionnalité 7
  let row = document.getElementsByClassName('row')[1];
  let greyButton = document.getElementsByClassName('btn-secondary')[0];

  greyButton.addEventListener('click', function(e) {
    e.preventDefault();
    row.insertBefore(row.lastChild, row.childNodes[0]);
  });

  //Fonctionnalité 8


  let blueButton = document.getElementsByClassName('btn-primary')[0];
  let parent = document.getElementsByClassName('row')[1];
  // let lastCard = document.getElementsByClassName("col-md-4")[5];
  
 

  blueButton.addEventListener('click', function(e) {
      e.preventDefault();
      parent.insertBefore(parent.firstChild, parent.childNodes[5].nextSibling);
   
  });




//     La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
//     Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
//     Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
//     Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// //     Si l'utilisateur presse la touche "b", tout redevient normal.
  let logo = document.getElementsByClassName('navbar-brand')[0];
  let body = document.getElementsByTagName('body')[0];

  logo.addEventListener("keypress", function(e) {
    e.preventDefault();
    let x = e.key
    if (x == "a" || x == "A") {
      body.className = "";
      body.classList.add("col-md-4");
    } else if (x == "y" || x == "Y") {
        body.className = "";
        body.classList.add("col-md-4");
        body.classList.add("offset-md-4");
    } else if (x == "p" || x == "P") {
        body.className = "";
        body.classList.add("col-md-4");
        body.classList.add("offset-md-8");
    } else if (x == "b" || x == "B") {
        body.className = "";
    }
  });











