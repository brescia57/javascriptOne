


function testo(){
	var title = document.getElementById('title');
	title.innerText = "Hobos";
};

function modo(){
	var ul = document.getElementsByTagName('ul')[0];

	var li = document.createElement('li');
	var node = document.createTextNode('List element 4');
	li.appendChild(node);
	ul.appendChild(li);
}