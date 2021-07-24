const mySlides = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.dot');
const image = document.querySelectorAll('.carousel-image');
let slideIndex = 0;
let dotIndex = slideIndex;
const maxIndex = mySlides.length - 1;// Maximum index of the slides
// let mHeight = "400px"; //Set image height
// for(const picture of image){
//     picture.style.maxHeight = mHeight;
// }
const showSlides = ()=>{
    for(const slides of mySlides){ slides.style.display = 'none'} /*This Resets the slides*/
    if(slideIndex >= mySlides.length ){slideIndex = 0} //slideIndex Range checker
    mySlides[slideIndex].style.display = 'block';
    slideIndex++;
    setTimeout(showSlides, 10000);//The loop fuctions here after 3 secs
};
const showDots = ()=>{
    for(const dot of dots){ dot.style.backgroundColor = 'transparent'} //Initialize colour of the dots
    if(dotIndex >= mySlides.length){ dotIndex = 0 }
    dots[dotIndex].style.backgroundColor = 'white';
    dotIndex++;
    setTimeout(showDots, 10000);
};
const dotChecker = ()=>{/*This is to update dots value to slideIndex */
    dotIndex = slideIndex;
    dots[dotIndex].style.backgroundColor = 'white';
};
const plusSlides = (n)=>{
        for(const slides of mySlides){ slides.style.display = 'none' /*CleanUp exercise */}
        for(const dot of dots){dot.style.backgroundColor = 'transparent' /*CleanUp exercise for dots */}
        if( slideIndex >= maxIndex && n === 1){ //Delimits slideIndex for +n
            slideIndex = 0;
            mySlides[slideIndex].style.display = 'block';
            dotChecker();
        }else{
            if(slideIndex === 0 && n === -1){ 
            n = maxIndex;
            }
            slideIndex += (n);
            mySlides[slideIndex].style.display = 'block';
            dotChecker();
        }
};
//Iterate over the dots to assign an 'i' value for each NodeList item for use in currentSlide functiion 
for(let i =0; i< dots.length; i++){
    dots[i].addEventListener('click',function () {
        slideIndex = i;
        for(const slides of mySlides){slides.style.display = 'none'}
        for(const dot of dots){ dot.style.backgroundColor = 'transparent'}
        mySlides[slideIndex].style.display = 'block';
        dotChecker();
    });
} 
showSlides();
showDots();
