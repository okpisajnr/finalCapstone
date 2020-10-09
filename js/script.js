$(document).ready(function(){
	$('#toTop').hide();
	var currentPage='#information';
	$(currentPage).show().animate({marginTop:0},500);
	
	$('.nav li a').click(function(e){
		var newPage=$(this).attr('href');
		$(this).parents('ul').find('a').removeClass('active');
		if(newPage!='#information')
			$(this).addClass('active');
		$(currentPage).hide().animate({marginTop:50},500);
		$(newPage).show().animate({marginTop:0},500);
		if(newPage=='#profile')
		{
			$('.profile-details').isotope({
				itemSelector: '.profile-post',
				layoutMode: 'fitRows'
			});
			
			$('#profile-filters li a').click(function(e){
				var myFilter = $(this).attr('href');
				$('.profile-details').isotope({ filter: myFilter });
				$(this).parents('ul').find('a').removeClass('current');
				$(this).addClass('current');
				e.preventDefault();
			});
		}
		else if(newPage=='#portfolio')
		{
			$('.portfolio-details').isotope({
				itemSelector: '.portfolio-post',
				layoutMode: 'fitRows'
			});
			
			$('#portfolio-filters li a').click(function(e){
				var myFilter = $(this).attr('href');
				$('.portfolio-details').isotope({ filter: myFilter });
				$(this).parents('ul').find('a').removeClass('current');
				$(this).addClass('current');
				e.preventDefault();
			});
		}
		
		currentPage=newPage;
		e.preventDefault();
	});
	
	$(window).scroll(function(){
		
		if($(window).scrollTop()>=100)
			$('#toTop').show();
		else
			$('#toTop').hide();
		
	});
	$('#toTop').click(function(e){
		$('body').animate({scrollTop:0},1000);
		e.preventDefault();
	});
	
});

document.getElementsByClassName("tablink")[0].click();

function ShowAboutMe(evt, ModalCard) {
  var i, x, tablinks;
  x = document.getElementsByClassName("about");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
  }
  document.getElementById(ModalCard).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}
