

//color-theme-change button 

const root = document.querySelector(':root');
const body = document.querySelector('body');

const colorThemeButton = document.getElementById('color-theme');
const lightThemeColor = getComputedStyle(root).getPropertyValue('--light-theme-main-color').trim();
const darkThemeColor = getComputedStyle(root).getPropertyValue('--dark-theme-main-color').trim();


if (sessionStorage.getItem('color mode') === null){
    sessionStorage.setItem('color mode', 'light mode')
}

if (sessionStorage.getItem('color mode') === 'dark mode'){
    document.querySelector(':root').style.setProperty('--main-color', 'rgb(255, 243, 235)');
}
// functionality of button
colorThemeButton.addEventListener('click', () => {

    // const bodyEl = getComputedStyle(body).getPropertyValue('background-color');
    if (sessionStorage.getItem('color mode') === 'light mode'){
        document.querySelector(':root').style.setProperty('--main-color', 'rgb(126, 78, 101)');
        sessionStorage.setItem('color mode', 'dark mode');
        console.log('in if'); 

    }else if(sessionStorage.getItem('color mode') === 'dark mode'){
        document.querySelector(':root').style.setProperty('--main-color', 'rgb(255, 243, 235)');
        // root.style.setProperty('--dark-theme-main-color', lightThemeColor);
        sessionStorage.setItem('color mode', 'light mode');
        console.log('in else');
    }         
});



if (window.location.pathname === "/home.html"){

}else if (window.location.pathname === "/projects.html"){

    function bigImg(x) {
        document.getElementById('spaceImg').style.height = "500px";
        document.getElementById('spaceImg').style.width = "500px";
     }
     
     function normalImg(x) {
        document.getElementById('spaceImg').style.height = "400px";
        document.getElementById('spaceImg').style.width = "400px";
     }

     function hangmanBig(x) {
        document.getElementById('hangmanImg').style.height = "500px";
        document.getElementById('hangmanImg').style.width = "500px";
     }

     function hangmanSmall(x) {
        document.getElementById('hangmanImg').style.height = "400px";
        document.getElementById('hangmanImg').style.width = "400px";
     }






}else if (window.location.pathname === "/resume.html"){

}else if(window.location.pathname === "/aboutme.html"){
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

}


