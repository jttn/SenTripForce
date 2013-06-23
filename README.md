SenTripForce
============

Timeshare Booking App
https://docs.google.com/document/d/1RdiZAUZfC4G3gIjHQdBCydKBKLedvMuyaTumZZO0wD8/edit?usp=sharing


javascript:(function(){Ext.each(document.getElementsByClassName('x-grid-cell'),function(elem){console.log(elem)debugger;var domElem=elem;domElem.addEventListener('touchstart',function(x){console.log(x.target.style);x.target.style.color="red";})})})();

Ext.each(document.getElementsByClassName('x-grid-cell'),
	function(elem){console.log(elem)
		debugger;
	var domElem = elem; //< js.HTMLDivElement
	domElem.addEventListener('touchstart',function(x){
		console.log(x.target.style);
		x.target.style.color = "red";
		//x.target.style='color:red;' + x.target.style;
	})})