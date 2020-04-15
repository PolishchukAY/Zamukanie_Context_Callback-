window.onload = function(){
	
	var item = document.querySelector('.items .item');
	
	//item.onclick = activeItem;
	item.onclick = function(){
		this.classList.toggle('item-active');
	} 
}

function activeItem(){
	//console.log(this)
	//this
	this.classList.toggle('item-active');
}
