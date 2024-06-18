document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('open');
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
    });

//fonction lecture audio
    let button = document.getElementById('btnAudio');
    let content = document.getElementById('text');
    let speech = new SpeechSynthesisUtterance();
    let PauseButton = document.getElementById('Pausebutton');
    let resumebutton =document.getElementById('resumebutton');
    let stopbutton =document.getElementById('stopbutton');
    var isPaused = false;

    button.addEventListener("click", function startReading(){
        speech.text = content.textContent;
        speech.onend = function(){
            isPaused=false;
            stopbutton.style.display='none';
            resumebutton.style.display='none';
            PauseButton.style.display='none';
            button.style.display='block';
        }
        window.speechSynthesis.speak(speech);
        PauseButton.style.display='block';
        stopbutton.style.display='block';
        button.style.display='none';

    });

    PauseButton.addEventListener("click",function(){
        if(window.speechSynthesis.speaking && !window.speechSynthesis.paused){
            window.speechSynthesis.pause();
            isPaused = true;
            PauseButton.style.display='none';
            stopbutton.style.display='block';
            resumebutton.style.display='block';
        };
       
    })

    resumebutton.addEventListener('click',function(){
        if(isPaused){
            window.speechSynthesis.resume();
            isPaused = false;
            resumebutton.style.display='none';
            PauseButton.style.display='block';
            stopbutton.style.display='block';

        }else if (!window.speechSynthesis.speaking){
            startReading();
        }  
    })

    stopbutton.addEventListener('click',function(){
        window.speechSynthesis.cancel();
        isPaused = false;
        stopbutton.style.display='none';
        resumebutton.style.display='none';
        PauseButton.style.display='none';
        button.style.display='block';
    })

})