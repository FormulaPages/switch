(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.index = mod.exports;
  }
})(this, function (exports, module) {
  "use strict";

  module.exports = SWITCH;

  function SWITCH() {
    var result;
    if (arguments.length > 0) {
      var targetValue = arguments[0];
      var argc = arguments.length - 1;
      var switchCount = Math.floor(argc / 2);
      var switchSatisfied = false;
      var defaultClause = argc % 2 === 0 ? null : arguments[arguments.length - 1];

      if (switchCount) {
        for (var index = 0; index < switchCount; index++) {
          if (targetValue === arguments[index * 2 + 1]) {
            result = arguments[index * 2 + 2];
            switchSatisfied = true;
            break;
          }
        }
      }

      if (!switchSatisfied && defaultClause) {
        result = defaultClause;
      }
    }

    return result;
  }

  ;
});
