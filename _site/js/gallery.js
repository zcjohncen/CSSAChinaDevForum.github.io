for(var i in pictures){
	var new_pic = "<div class='item'><!-- Set the third background image using inline CSS below. --><div class='fill' style='background-image:url(USER_IMAGE_URL);''></div><div class='carousel-caption'><h2>USER_CAPTION</h2></div></div>"
	new_pic = new_pic.replace('USER_IMAGE_URL', pictures[i].image)
	new_pic = new_pic.replace('USER_CAPTION', pictures[i].description)
	$(".carousel-inner").append(new_pic);

	var new_indicator = "<li class='indicator_item' data-target='#myCarousel' data-slide-to='INDICATOR_VALUE'></li>"
	new_indicator = new_indicator.replace('INDICATOR_VALUE', i)
	$(".carousel-indicators").append(new_indicator)
}
$('.item').first().addClass('active');
$('.indicator_item').first().addClass('active');


$('.carousel').carousel({
    interval: 3000 //changes the speed
})