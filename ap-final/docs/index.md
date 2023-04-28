# AP Computer science project

This is a simple music player app built in vanilla JavaScript. I made this for my AP computer science project.

## Commands

`skip()` to skip to the next song

`back()` to go back to the previous song

`pausePlay()` to play or stop the current song

## How it works

The song list is predefined in embedded json, I would've linked a json file, but it's difficult to import json into javascript that's imported into html.
All the controls are defined as constants from their html element id, the fields for title, artist, art and album are defined the same way.
Once you click play it runs the `refresh()` function which updates all of the display values along with the url for the currently playing song, after that it executes an `audio.play` operation against the audio element (in this case `#audio`).

### Inputs and outputs

The inputs for this are usually button presses, but you can also interact by using the console to run the commands.

The outputs are the UI changes and the audio, specifically:

- The art work for both the player and the background change
- The song title field changes to reflect the title of the currently playing song
- The song artist field changes to reflect the artist name of the currently playing song
- The song album field changes to reflect the album of the currently playing song

## Video demonstration

[Link](https://TODO:_ADD_LINK)

In the above video I demonstrated the play, stop, skip and back controls, along with the console control capabilities.

## List

```js
const trackList = [
    songList.one,
    songList.two,
    songList.three,
    songList.four,
    songList.five
];
```

This tracklist is what's traversed to allow song skipping, I could've directly traversed the parsed json list, but that would've been slightly more difficult and wouldn't have looked as good.

```js
function refresh() {
    audio.src = trackList[current].src;
    art.setProperty('--art', 'url(' + trackList[current].art + ')');
    artist.innerHTML = trackList[current].artist;
    album.innerHTML = trackList[current].album;
    title.innerHTML = trackList[current].title;
    controls();
}
```

This refresh function uses `trackList[current]` the variable `current` is defined in line 56; `var current = 0;`. It is later iterated through in the `advancer` function.

```js
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
```

## Known bugs

- going beyond the `trackList` end will log errors and not loop back to the beginning, same with going before the start.

## AP written response requirements

- [x] describes the overall purpose of the program.
- [x] describes what functionality of the program is demonstrated in the video.
- [x] describes the input and output of the program demonstrated in the video.
- [x] includes two program code segments:

- one that shows how data has been stored in this list (or other collection type).
- one that shows the data in this same list being used as part of fulfilling the program’s purpose.

- [x] identifies the name of the variable representing the list being used in this response.
- [x] describes what the data contained in this list is representing in the program.
- [x] includes a program code segment that shows a list being used to manage complexity in the program.
- [ ] explains how the named, selected list manages complexity in the program code by explaining why the program code could not be written, or how it would be written differently, without using this list.
- [ ] includes two program code segments:

- one showing a student-developed procedure with at least one parameter that has an effect on the functionality of the procedure.
- one showing where the student-developed procedure is being called.

- [ ] describes what the identified procedure does and how it contributes to the overall functionality of the program.
- [ ] includes a program code segment of a student-developed algorithm that includes

- sequencing
- selection
- iteration

- [ ] explains in detailed steps how the identified algorithm works in enough detail that someone else could recreate it.
- [ ] describes two calls to the selected procedure identified in written response 3c. Each call must pass a different argument(s) that causes a different segment of code in the  algorithm to execute.
- [ ] describes the condition(s) being tested by each call to the procedure.
- [ ] identifies the result of each call.

- [ ] Read through right-hand column
