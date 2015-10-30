var slider;

$(document).ready(function () {

           var currSlide = 1;
           slider = $('.bxslider').bxSlider({
                adaptiveHeight: true,
                mode: 'horizontal',
                speed: 450,
                pager: false,
                onSliderLoad: function () {
                    console.log('Slider loaded.');
                },
                onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                    console.log('Slider slided to: ' + newIndex);
                    currslide = newIndex + 1;
                    
                    $('#sliderState').html(currslide + "/25");                                    
                }

            });
  
    
});



 function nextPic() {
    console.log('next pic');    
    slider.goToNextSlide();
}

 function prevPic() {
    console.log('prev pic');    
    slider.goToPrevSlide();
}
    












