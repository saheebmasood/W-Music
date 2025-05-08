// playerControls.js
import { loadPlaylist, getSong, getSongsLength, songs, currentIndex as startIndex } from './playlist.js';

document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const currentSongTitle = document.getElementById('currentSongTitle');
    const currentArtist = document.getElementById('currentArtist');
    const albumArt = document.getElementById('albumArt');
    const songList = document.getElementById('songList');

    let currentIndex = startIndex;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateProgress() {
        if (audioPlayer.currentTime && audioPlayer.duration) {
            const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.value = progressPercent;
            currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
            durationEl.textContent = formatTime(audioPlayer.duration);
        }
    }

    function playSong(index) {
        currentIndex = index;
        const song = getSong(currentIndex);
        audioSource.src = song.file;
        albumArt.src = song.albumArt;
        currentSongTitle.textContent = song.title;
        currentArtist.textContent = song.artist;
        audioPlayer.load();
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    }

    playBtn.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playBtn.textContent = 'Play';
        }
    });

    prevBtn.addEventListener('click', function () {
        currentIndex = currentIndex === 0 ? getSongsLength() - 1 : currentIndex - 1;
        playSong(currentIndex);
    });

    nextBtn.addEventListener('click', function () {
        currentIndex = currentIndex === getSongsLength() - 1 ? 0 : currentIndex + 1;
        playSong(currentIndex);
    });

    progressBar.addEventListener('input', function () {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    });

    audioPlayer.addEventListener('timeupdate', updateProgress);

    loadPlaylist(songList, playSong);
    playSong(currentIndex);
});
