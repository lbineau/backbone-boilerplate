define([
  // Application.
  "app",
  "jquery",

  "views/ashowhide"
],

function(app, $, AShowHideView) {

  // Defining the application router, you can attach sub routers here.
  var TrollView = AShowHideView.extend({
    template: "troll",
 // Add some content to the element
    beforeRender: function() {
      //this.$el.html("Play with me ! :)");
    },

    states: {
      visible: {enter: ['doShow'], leave: ['doHide']}      // All options see: 'state options'
    },
    transitions: {
      'init': {
          'initialized': {enterState: 'visible'}
      },
      'visible': {
          'hide': {enterState: 'invisible'}                      // All options see: 'transition options'
      },
      'invisible': {
          'show': {enterState: 'visible'}
      }
    },

    initialize: function(opts) {
      this.toState('init');                           // you need to set manually the initial state
      $(document).on('keydown', $.proxy(this._onKeyDown, this));
      this.trigger('initialized', 0);                 // our object is initialized
    },

    doShow: function(duration) { this.$el.find('.animation').stop(true,true).fadeIn(duration); },
    doHide: function(duration) { this.$el.find('.animation').stop(true,true).fadeOut(duration); },

    _onKeyDown: function(e) {
      switch(e.keyCode){
        case 83:
          this.trigger('show',1000);
        break;
        case 72:
          this.trigger('hide',1000);
        break;
        default:
      }
    }

  });

  return TrollView;

});