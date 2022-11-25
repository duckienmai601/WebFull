const searchBtn=document.querySelector('search-btn')
let searchInput=document.getElementById('.search-input')
searchBtn.addEventListener('click',function(){
	window.location.href='/SanPham/category/' + (searchInput.innerText)+'.html'	
})
 