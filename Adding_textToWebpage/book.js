const initialize = function() {

	document.querySelector('#addmessage').addEventListener('click',()=> {

		const newMessage = document.querySelector('#newmessage').value;
		const newElementP = document.createElement('p');
		const newTextNode = document.createTextNode(newMessage);
		newElementP.appendChild(newTextNode);
		const messages = document.querySelector('#messages');
		messages.appendChild(newElementP);
		document.querySelector('#newmessage').value ='';
	});
};

window.addEventListener('load', () => {
	initialize();

});