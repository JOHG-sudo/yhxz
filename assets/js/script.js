
// 禁用右键菜单
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});




//=================================================================【BGM】=============================================================
// 欢迎页面淡出控制，音乐控制
var isMusicPlayed = false; // 记录音乐是否已经播放
var isWelcomed = false; //记录您是否已离开欢迎页面
var BGM = new Audio("./assets/music/1.mp3"); //BGM

document.addEventListener("click", function (event) {
    if (!isWelcomed) {
        removeWelcomePageAndPlayMusic();
    }
});

function removeWelcomePageAndPlayMusic() {
    var welcomePage = document.getElementById("welcome-page");
    welcomePage.style.opacity = 0;
    setTimeout(function () {
        welcomePage.style.display = "none";
    }, 500);

    if (!isMusicPlayed && !isWelcomed) {
        playBackgroundMusic();
        isMusicPlayed = true;
        isWelcomed = true;
    }
}

function playBackgroundMusic() {
    BGM.loop = true; // 循环播放
    BGM.play(); // 播放BGM
    BGM.volume = 0.1; 
}

//音乐播放控制
var volumeControl = document.getElementById("volume-control");
var volumeIcon = document.getElementById("volume-icon");


//音乐暂停和播放逻辑
volumeControl.addEventListener("click", function () {
    if (!isMusicPlayed) {
        // Play music
        BGM.play();
        volumeIcon.style.animationPlayState = "running";
        isMusicPlayed = true;
    } else {
        // Pause music
        BGM.pause();  
        volumeIcon.style.animationPlayState = "paused";
        isMusicPlayed = false;
    }
});
