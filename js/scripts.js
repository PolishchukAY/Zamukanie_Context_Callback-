window.onload = function(){
	
	var items = document.querySelectorAll('.items .item');
	
	function activeItem(){
		//console.log(e);
		this.classList.toggle('item-active');
		//console.log(this);
	}
	
	setInterval(function(){
		var rand = mtRand(0, items.length-1);
		console.log(rand);
		//activeItem;
	}, 1000);
	
}

function mtRand(min, max){
	return Math.floor(Math.random()*(max-min+1));
}



