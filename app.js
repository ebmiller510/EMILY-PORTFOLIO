

//color-theme toggle-able button; functional on all pages

const root = document.querySelector(':root');
const body = document.querySelector('body');

const colorThemeButton = document.getElementById('color-theme');
const lightThemeColor = getComputedStyle(root).getPropertyValue('--light-theme-main-color').trim();
const darkThemeColor = getComputedStyle(root).getPropertyValue('--dark-theme-main-color').trim();


if (sessionStorage.getItem('color mode') === null){
    sessionStorage.setItem('color mode', 'light mode')
}

if (sessionStorage.getItem('color mode') === 'dark mode'){
    document.querySelector(':root').style.setProperty('--main-color', 'rgb(126, 78, 101');
}
// functionality of button
colorThemeButton.addEventListener('click', () => {

    // const bodyEl = getComputedStyle(body).getPropertyValue('background-color');
    if (sessionStorage.getItem('color mode') === 'light mode'){
        document.querySelector(':root').style.setProperty('--main-color', 'rgb(126, 78, 101)');
        sessionStorage.setItem('color mode', 'dark mode');

    }else if(sessionStorage.getItem('color mode') === 'dark mode'){
        document.querySelector(':root').style.setProperty('--main-color', 'rgb(255, 243, 235)');
        // root.style.setProperty('--dark-theme-main-color', lightThemeColor);
        sessionStorage.setItem('color mode', 'light mode');
    }         
});


//////////////////code to specify what page takes what functions/////////
if (window.location.pathname === "/index.html"){
//for later use (empty now)


}else if (window.location.pathname === "/projects.html"){
//code for project page "grow on mouseover"
    function bigImg(x) {
        document.getElementById('spaceImg').style.height = "35vw";
        document.getElementById('spaceImg').style.width = "35vw";
     }
     
     function normalImg(x) {
        document.getElementById('spaceImg').style.height = "20vw";
        document.getElementById('spaceImg').style.width = "20vw";
     }

     function hangmanBig(x) {
        document.getElementById('hangmanImg').style.height = "35vw";
        document.getElementById('hangmanImg').style.width = "35vw";
     }

     function hangmanSmall(x) {
        document.getElementById('hangmanImg').style.height = "20vw";
        document.getElementById('hangmanImg').style.width = "20vw";
     }




}else if (window.location.pathname === "/resume.html"){
//for later use (empty now)

}else if(window.location.pathname === "/aboutme.html"){
// about me page img carousel 
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

}


