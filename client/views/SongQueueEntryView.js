// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!


  // if click on a song that is already in the queue it should start playing and dissapear from the quue

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.dequeue();
    },

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }


});
