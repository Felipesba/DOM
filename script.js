var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

function criarBotaoApagarLista(){
  var p = document.querySelector("ul");
  var filhos = p.childNodes;
  for( i = filhos.length - 1; i >= 0; i-- ) {
    if( filhos[i].tagName == 'LI' ) {
      p.removeChild( filhos[i] );
    	}
  	}
}

function deleteLi() {
	del.removeChild(li);
	console.log("deletou");
}

function clickLi() {
	for (var i = 0; i < ul.getElementsByTagName("li").length; i++) {
		ul.li[i].innerHTML = "zzzzzzzz";
		console.log("clicou");
		}	
	  }

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Apagar item"));   
	li.appendChild(btn);
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// ul.addEventListener("click", clickLi);

// del.addEventListener("click", deleteLi);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
