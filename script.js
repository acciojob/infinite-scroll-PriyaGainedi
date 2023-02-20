//your code here!
var list = document.getElementById("infi-list");
for(var i=1;i<=10;i++){
	var listItem = document.createElement("li");
	listItem.textContent ="item "+i;
	list.appendChild(listItem);
}
function addlistItems() {
	for(var i=11;i<=50;i++){
		var listItem = document.createElement("li");
		listItem.textContent ="item "+i;
		list.appendChild(listItem);
	}
}

list.addEventListener("scroll",addlistItems);
