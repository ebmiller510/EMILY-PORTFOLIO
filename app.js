





//color-theme-change button 
const root = document.querySelector(':root');
const body = document.querySelector('body');

const colorThemeButton = document.getElementById('color-theme');
const lightThemeColor = getComputedStyle(root).getPropertyValue('--light-theme-main-color').trim();
const darkThemeColor = getComputedStyle(root).getPropertyValue('--dark-theme-main-color').trim();
// console.log(getComputedStyle(root).backgroundColor);

// console.log(lightThemeColor);
// console.log(darkThemeColor);
//toggle functionality if current color is ___
colorThemeButton.addEventListener('click', () => {

    const bodyEl = getComputedStyle(body).getPropertyValue('background-color');
    console.log(bodyEl);

    if (bodyEl === darkThemeColor){
        root.style.setProperty('--dark-theme-main-color', lightThemeColor);
        console.log('in if'); 

    }else if(bodyEl === lightThemeColor){
        root.style.setProperty('--light-theme-main-color', darkThemeColor);
        console.log('in else')
        console.log(bodyEl);
    }         
        console.log(bodyEl);
        console.log('==============')
});



// aboutMePage img carousel //
let previousImgIndex = 0;
let currentImgIndex =0;

const aboutMePageImages = document.getElementsByClassName('aboutMeImg');

// event listener for previous button
const previousButton = document.querySelector('.aboutMeImgButton-prev');
previousButton.addEventListener('click', () => {
    previousImgIndex = currentImgIndex;
        currentImgIndex--;
        aboutMePageImages[previousImgIndex].style.display ='none';
        if (currentImgIndex < 0) {
            currentImgIndex = aboutMePageImages.length -1;
            }
        aboutMePageImages[currentImgIndex].style.display = 'block';
        });
    console.log(previousButton);

//event listener for next button
const nextButton = document.querySelector('.aboutMeImgButton-next');
nextButton.addEventListener('click', () => {
    previousImgIndex = currentImgIndex;
    currentImgIndex++;
    aboutMePageImages[previousImgIndex].style.display ='none';
    if (currentImgIndex >= aboutMePageImages.length) {
        currentImgIndex = 0;
        }
    aboutMePageImages[currentImgIndex].style.display = 'block';
    });


