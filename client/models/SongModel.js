// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // name 

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }

  // .enqueue: function(){} remove from song queue
  // .dequeue: function(){} add to song queue
  // .ended: function(){} // would true is song was over?
});
