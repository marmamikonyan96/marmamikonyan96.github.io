$(function (){
	$('.book').click(function(){
		$('#modal').addClass('show');
	})
	$('.mine_modal__overlay').click(function(){
		$('#modal').removeClass('show')
	})
})