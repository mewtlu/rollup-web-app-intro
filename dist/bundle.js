(function () {
	'use strict';

	const element = document.createElement('div');
	element.innerText = 'dependency 3';
	document.body.appendChild(element);

	const element$1 = document.createElement('div');
	element$1.innerText = 'dependency 2';
	document.body.appendChild(element$1);

	const element$2 = document.createElement('div');
	element$2.innerText = 'dependency 1';
	document.body.appendChild(element$2);

	const element$3 = document.createElement('div');
	element$3.innerText = 'main';
	document.body.appendChild(element$3);

}());
