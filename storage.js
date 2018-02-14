function storageEvent(event) {
  event = event || window.event; // give IE8 some love
  alert('Yo people! Something just got stored!');
}

if (window.attachEvent) { // ::sigh:: IE8 support
   window.attachEvent('onstorage', storageEvent);
} else {
    window.addEventListener('storage', storageEvent, false);
}

function storeChoices(){

var foods = [
'apple',
'banana',
'grapes',
'apple',
];

localStorage.foods = JSON.stringify(foods);	
	
	
}

function displayQuestions(){
	
	var question = JSON.parse(localStorage.foods);
	
	//var q_array
	
//	alert(question);
		
}