"use strict";
function makeAlbum(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// caling  func and creatin var
let album1 = makeAlbum("aiman", "album title 1");
let album2 = makeAlbum("yamna", "album title 2", 10);
let album3 = makeAlbum("hamna", "album title 3");
console.log(album1, album2, album3);
