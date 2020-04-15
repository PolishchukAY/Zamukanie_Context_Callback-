window.onload = function(){
	
	var items = document.querySelectorAll('.items .item');
	
	for(var i = 0; i < items.length; i++){
		items[i].onclick = activeItem;
	}
		
	function activeItem(e){
		console.log(e);
		this.classList.toggle('item-active');
		console.log(this);
	}
		
}


