const songList = JSON.parse(
    `{
        "one": {
            "artist": "Ellis",
            "title": "The Taste",
            "art": "https://static.wikia.nocookie.net/monstercat/images/2/27/Ellis_-_The_Taste_%28Art%29_2.jpg/revision/latest?cb=20210409113914",
            "album": "Monstercat Instinct Vol. 7",
            "src": "https://agentseed.org/the-taste.mp3"
        },
        "two": {
            "artist": "Spektrem",
            "title": "Shine",
            "art": "https://i1.sndcdn.com/artworks-000073792868-kybax7-t500x500.jpg",
            "album": "Shine (Single)",
            "src": "https://agentseed.org/shine.mp3"
        },
        "three": {
            "artist": "Alan Walker",
            "title": "Dreamer",
            "art": "https://i.scdn.co/image/ab67616d0000b2736ee3f219eee85d9261da3578",
            "album": "Dreamer (Single)",
            "src": "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/378/dreamer-1680825645-w02oSTah2D.mp3"
        },
        "four": {
            "artist": "Balynt",
            "title": "Time To Go",
            "art": "https://i1.sndcdn.com/artworks-4dtbRatEChF1RdnV-kTENbQ-t500x500.jpg",
            "album": "Time To Go (Single)",
            "src": "https://agentseed.org/time-to-go.mp3"
        },
        "five": {
            "artist": "Imperss",
            "title": "Reflection",
            "art": "https://f4.bcbits.com/img/a0070443350_16.jpg",
            "album": "Reflection",
            "src": "https://agentseed.org/reflection.mp3"
        }
    }`
);
const audio = document.querySelector("audio");
const bar = document.getElementById("bar");
var art = document.documentElement.style;
var title = document.getElementById("title");
var artist = document.getElementById("artist");
var album = document.getElementById("album");
const playButton = document.getElementById("play");
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");
const trackList = [
    songList.one,
    songList.two,
    songList.three,
    songList.four,
    songList.five
];
var current = 0;
function refresh() {
    audio.src = trackList[current].src;
    art.setProperty('--art', 'url(' + trackList[current].art + ')');
    artist.innerHTML = trackList[current].artist;
    album.innerHTML = trackList[current].album;
    title.innerHTML = trackList[current].title;
    controls();
}
function playPause() {
    if(audio.paused) {
        refresh();
        audio.play();
        playButton.innerHTML = "stop_circle";
    } else {
        audio.pause();
        playButton.innerHTML = "play_circle";
    }
}
function next() {
    audio.pause();
    advancer('forward');
    refresh();
    audio.play();
    playButton.innerHTML = "stop_circle";
}
function back() {
    audio.pause();
    advancer('backward');
    refresh();
    audio.play();
    playButton.innerHTML = "stop_circle";
}
function advancer(direction) {
    if (current == trackList[4] && direction == 'forward') {
        current = trackList[0];
    } else if (current == trackList[4] && direction == 'backward') {
        current--;
    } else if (current != trackList[4] && direction == 'forward') {
        current++;
    } else if (current != trackList[0] && direction == 'backward') {
        current--;
    } else if (current == trackList[0] && direction == 'backward') {
        current = trackList[4];
    }
}
function controls() {
    if (current == 'songList.five') {
        nextButton.style.color = 'grey';
        console.log('at last track');
    } else if (current == songList.one) {
        backButton.style.color = 'grey';
    } else {
        return;
    }
}
function parser() {
    data.parse;
    console.log(data.song1.artist) ;
}