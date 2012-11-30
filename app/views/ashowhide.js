define([
  // Application.
  "app",
  "jquery"
],

function(app, $) {

  // Defining the application router, you can attach sub routers here.
  var AShowHideView = Backbone.StatefulView.extend({
    className: 'backbone-statemachine',

    beforeRender: function() {
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
      this.trigger('initialized', 0);                 // our object is initialized
    },

    doShow: function(duration) { this.$el.stop(true,true).fadeIn(duration); },
    doHide: function(duration) { this.$el.stop(true,true).fadeOut(duration); },

  });

  return AShowHideView;

});