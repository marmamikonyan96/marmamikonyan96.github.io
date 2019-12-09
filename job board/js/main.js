const header = document.getElementById('header');

window.onscroll = function() {
    var scrolled = (window.pageYOffset || document.documentElement.scrollTop);

    if(scrolled > 0){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
	}
}