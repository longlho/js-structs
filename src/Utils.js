(function () {

  //Is it in the global scope?
  var _ = this._ || {};
  if (require) {
    try {
      _  = require('underscore')._;
    } catch (e) {
      //NodeJS uses _ with a separate purpose, so check if it's real UnderscoreJS
      if (_ && !_.noConflict) {
        _ = {};
      }
    }
  }

  var Utils = new function () {
    this.keys = _.keys || function (obj) {
      var keys = [];
      for (var k in obj) {
        keys.push(k);
      }
      return keys;
    };

    this.values = _.values || function (obj) {
      var values = [];
      for (var k in obj) {
        values.push(obj[k]);
      }
      return values;
    };

    this.isArray = _.isArray || function (obj) {
      return Object.prototype.toString.call(obj) == '[object Array]';
    };

  };

  if (module && module.exports) {
    module.exports = Utils;
  } else if (exports) {
    exports = Utils;
  } else {
    this.Utils = Utils
  }
  
})();
