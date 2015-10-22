// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

// var songQueue = new SongQueue
  initialize: function(params){
    // params.library.on('enqueue', function(song){
    //   this.set('songQueue.length', song);
    // }, this);


    //
  }

//Write logic for functions

// if a song is added and it's the only song in the queue - it gets played
// .add: function(){} // takes in a song and adds it to the queue //?? some kind of enqueue

// .playfirst should get called - song should play

// when it is not the only song in the queue it does nothing
// add a song
// play function does not get called (the play function is on the SongModel)

// when a song ends that song gets removed from the queue
// song queue creates an array
// array length decreases after song has been played

// if any songs are left in the queue play the first song
// when one song finishes the next one should start

// if no songs left nothing should be happening

// when a song is dequeued it should be removed from the array

// .remove: function(){} ?? some kind of dequeue

// .playfirst: function(){} // plays first song in the array



});
