document.addEventListener("DOMContentLoaded", function() {
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
    

    
    
    const songs = [
        { title: ' ', artist: ' ', file: '', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2Yf9_3cFkT6lXJ16UzzzErQ_Ho1yheAbEA&s' },
        { title: 'Sorry', artist: 'Justin Bieber', file: 'https://themamaship.com/music/Catalog/Sorry%20-%20Justin%20Bieber.mp3', albumArt: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_-_Sorry_%28Official_Single_Cover%29.png' },
        { title: 'Perfect', artist: 'Ed Sheeran', file: 'https://themamaship.com/music/Catalog/Perfect%20-%20Ed%20Sheeran.mp3', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3_DmF-D7Nfee1Iu5Z_ftUYlW03gOsb_ZMQ&s' },
        { title: 'Perfect', artist: 'Ed Sheeran', file: 'https://rb.gy/e11s9o', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3_DmF-D7Nfee1Iu5Z_ftUYlW03gOsb_ZMQ&s' },
        { title: 'Nadaaniyan', artist: 'Akshath', file: 'https://sambalpuristar.in/files/download?id=7197', albumArt: 'https://c.saavncdn.com/722/nadaaniyan-Hindi-2024-20240517212238-500x500.jpg' },
        { title: 'Sadqay', artist: 'Aashir Wajahat, Nayel, Nehaal Naseem', file: 'https://pagalsongs.com.in/files/download?id=12188', albumArt: 'https://pagalsongs.com.in/siteuploads/thumb/sft25/12188_7.webp' },
        { title: 'Suniyan Suniyan', artist: 'Juss', file: 'https://raagjatt.dev/load/1gkdpnz51vxkq894z7me38dnq8njpyrn5b2l6dg4qebyl/Suniyan Suniyan (RaagJatt.COM).mp3', albumArt: 'https://raagjatt.dev/images/song/lmodkmdj/suniyan-suniyan-juss.webp' },
        { title: 'Tere Hawaale', artist: 'Pritam, Arijit Singh, Shilpa Rao', file: 'https://aac.saavncdn.com/576/b34009b2f8262c379ac410d8e32f7206_160.mp4', albumArt: 'https://c.saavncdn.com/576/Laal-Singh-Chaddha-Hindi-2022-20220805121002-500x500.jpg' },
        { title: 'Maan Meri Jaan', artist: 'King', file: 'https://aac.saavncdn.com/734/31a101fae38e184208e5f95e3e6c756d_160.mp4', albumArt: 'https://lh3.googleusercontent.com/B8qfmAm8BOtXmSEwYMkcotK6nun-imczlC1r8OyeCxGMJqqfoxFkqCWL38MgFN3dcmYp63PLo4aQYbo=w544-h544-l90-rj' },
        { title: 'Dil Tu Jaan Tu', artist: 'Gurnazar', file: 'https://s320.djpunjab.is/data/48/55677/304732/Dil%20Tu%20Jaan%20Tu%20-%20Gurnazar.mp3', albumArt: 'https://lh3.googleusercontent.com/y_6HpyQI58bOeOHo1E9umBPfiqbe3iWMHv3_2dKlwVsyRcaUhIXAHnneTXkBBs14BrCJPR2kp1pwWRNO_A=w544-h544-l90-rj' },
        { title: 'Husn', artist: 'Husn  by Anuv Jain', file: 'https://aac.saavncdn.com/436/13795b7aa2e87393366162b9e6a6fe88_160.mp4', albumArt: 'https://c.saavncdn.com/436/Husn-Hindi-2023-20231129054140-500x500.jpg' },
        { title: 'Shikayat', artist: 'AUR', file: 'https://aac.saavncdn.com/433/5d0773379e72eb85562c91b3b193d4e0_160.mp4', albumArt: 'https://c.saavncdn.com/433/Shikayat-Hindi-2023-20231214181447-500x500.jpg' },
        { title: 'Mehrama', artist: 'Pritam, Darshan Raval, Antara Mitra', file: 'https://aac.saavncdn.com/862/3a36773fb96a2f1232ba4463c6fb5a91_160.mp4', albumArt: 'https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-500x500.jpg' },
        { title: 'Pehli Si Muhabbat', artist: 'Ali Zafar', file: 'https://aac.saavncdn.com/430/7d45acf118733488bbdcdfc931533d27_160.mp4', albumArt: 'https://c.saavncdn.com/430/Pehli-Si-Muhabbat-English-2021-20210612154544-500x500.jpg' },
        { title: 'Pal', artist: ' Javed-Mohsin, Samuel & Akanksha, Tanishk Bagchi', file: 'https://aac.saavncdn.com/619/14531944c089c3c9c318e0b73b4b8ee8_160.mp4', albumArt: 'https://c.saavncdn.com/619/Jalebi-Hindi-2018-20180921123431-500x500.jpg' },
        { title: 'Dance Monkey', artist: 'Tones and I', file: 'https://themamaship.com/music/Catalog/Dance%20Monkey%20-%20Tones%20and%20I.mp3', albumArt: 'https://i.scdn.co/image/ab67616d0000b2732259742879137c15e1a0fa1f' },
        { title: 'Abhi Abhi', artist: 'KK', file: 'https://aac.saavncdn.com/198/8b68fbba0c3c0ea2ce0c01e82b2af966_160.mp4', albumArt: 'https://c.saavncdn.com/198/Jism-2-Hindi-2012-20211217161016-500x500.jpg' },
        { title: 'Perfect', artist: 'Ed Sheeran', file: 'https://themamaship.com/music/Catalog/Perfect%20-%20Ed%20Sheeran.mp3', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3_DmF-D7Nfee1Iu5Z_ftUYlW03gOsb_ZMQ&s' },
        { title: 'Perfect', artist: 'Ed Sheeran', file: 'https://rb.gy/e11s9o', albumArt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3_DmF-D7Nfee1Iu5Z_ftUYlW03gOsb_ZMQ&s' },
        { title: 'Nadaaniyan', artist: 'Akshath', file: 'https://sambalpuristar.in/files/download?id=7197', albumArt: 'https://c.saavncdn.com/722/nadaaniyan-Hindi-2024-20240517212238-500x500.jpg' },
        
        
    ];
    

    let currentIndex = Math.floor(Math.random() * 11);

    function loadPlaylist() {
        songList.innerHTML = '';
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.textContent = `${song.title} - ${song.artist}`;
            li.addEventListener('click', () => playSong(index));
            songList.appendChild(li);
        });
    }

    function playSong(index) {
        currentIndex = index;
        const song = songs[currentIndex];
        audioSource.src = song.file;
        albumArt.src = song.albumArt;
        currentSongTitle.textContent = song.title;
        currentArtist.textContent = song.artist;
        audioPlayer.load();
        audioPlayer.play();
    }

    function updateProgress() {
        if (audioPlayer.currentTime && audioPlayer.duration) {
            const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.value = progressPercent;
            currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
            durationEl.textContent = formatTime(audioPlayer.duration);
        }
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    playBtn.addEventListener('click', function() {
        

        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playBtn.textContent = 'Play';
        }

    });

   

    prevBtn.addEventListener('click', function() {
        currentIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
        playSong(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = currentIndex === songs.length - 1 ? 0 : currentIndex + 1;
        playSong(currentIndex);
    });

    progressBar.addEventListener('input', function() {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
    });

    audioPlayer.addEventListener('timeupdate', updateProgress);

    loadPlaylist();
    playSong(currentIndex);
});

