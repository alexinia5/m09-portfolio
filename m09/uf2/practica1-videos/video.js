document.addEventListener('DOMContentLoaded', (e) => {
    let video = document.getElementById('video');
    
    // ex.4
    let pausedVideo = document.getElementById('paused-video');
    let pause = 0;

    // video.addEventListener('pause', (e) => {
    //     pause += 1;
    //     pausedVideo.innerHTML = 'Video pausado: ' + pause;

    // })

    // ex.5
    let paused = document.getElementById('pause');
    let back = document.getElementById('back');
    let playBtn = document.getElementById('play-btn');
    let forward = document.getElementById('forward');
    let sound = document.getElementById('sound');

    let time = 0.3;

    back.addEventListener('click', () => {
        if (video.currentTime >= 0) {
            video.currentTime -= time;
        }
    })

    paused.addEventListener('click', () => {
        video.pause();
    })

    playBtn.addEventListener('click', () => {
        video.play();
    })

    forward.addEventListener('click', () => {
        video.currentTime += time;
    })

    sound.addEventListener('click', () => {
        if (video.hasAttribute('muted')) {
            video.removeAttribute('muted');
            sound.classList.replace('muted', 'sound');

        } else if (!video.hasAttribute('muted')) {
            video.setAttribute('muted', 'muted');
            sound.classList.add('muted');
        }
    })
})