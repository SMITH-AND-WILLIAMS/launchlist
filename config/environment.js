/* eslint-env node */

module.exports = function (environment) {
  let ENV = {
    firebase: {
      apiKey: "AIzaSyCT1AN-oQLD2Utm7ddQmZ0ueTpS7FId4ok",
      authDomain: "launchlists.firebaseapp.com",
      databaseURL: "https://launchlists.firebaseio.com",
      projectId: "launchlists",
      storageBucket: "launchlists.appspot.com",
      messagingSenderId: "944606381435"
    },
    modulePrefix: 'launchlist',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
