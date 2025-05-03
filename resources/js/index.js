function replace(){
	var title_bar_height=document.getElementById("title_bar").offsetHeight;
	// console.log(title_bar_height);
	document.getElementById("top_logo").style.height=title_bar_height+"px";
}
document.addEventListener("DOMContentLoaded",replace)



