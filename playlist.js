// playlist.js

const songs = [
    { title: ' ', artist: ' ', file: '', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2Yf9_3cFkT6lXJ16UzzzErQ_Ho1yheAbEA&s' },
    { title: 'Sorry', artist: 'Justin Bieber', file: 'https://themamaship.com/music/Catalog/Sorry%20-%20Justin%20Bieber.mp3', albumArt: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_-_Sorry_%28Official_Single_Cover%29.png' },
    { title: 'Perfect', artist: 'Ed Sheeran', file: 'https://themamaship.com/music/Catalog/Perfect%20-%20Ed%20Sheeran.mp3', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3_DmF-D7Nfee1Iu5Z_ftUYlW03gOsb_ZMQ&s' },
    { title: 'Perfect', artist: 'Ed Sheeran', file: 'https://rb.gy/e11s9o', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3_DmF-D7Nfee1Iu5Z_ftUYlW03gOsb_ZMQ&s' },
    { title: 'Nadaaniyan', artist: 'Akshath', file: 'https://sambalpuristar.in/files/download?id=7197', albumArt: 'https://c.saavncdn.com/722/nadaaniyan-Hindi-2024-20240517212238-500x500.jpg' },
    // ... add other songs here
];

let currentIndex = Math.floor(Math.random() * 11);

function loadPlaylist(songList, playSongCallback) {
    songList.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => playSongCallback(index));
        songList.appendChild(li);
    });
}

function getSong(index) {
    return songs[index];
}

function getSongsLength() {
    return songs.length;
}

export { loadPlaylist, getSong, getSongsLength, songs, currentIndex };
