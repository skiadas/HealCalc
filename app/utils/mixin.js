(function(define) { 'use strict';
define(function(require) {

    // Mixes into obj any other objects passed as parameters
    return function mixin(obj) {
        var i, key, obj2;
        for (i = 1; i < arguments.length; i++) {
            obj2 = arguments[i];
            for (key in obj2) {
                if (obj2.hasOwnProperty(key)) {
                    obj[key] = obj2[key];
                }
            }
        }
        return obj;
    }
});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
