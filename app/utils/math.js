(function(define) { 'use strict';
define(function(require) {

    // Multiplies all remaining haste values into base
    return {
       hasteMultiply: function hasteMultiply(base) {
           var args = Array.prototype.slice.apply(arguments);
           var adjusted = args.map(function(v) { return 1 + v / 100; });
           var combine = adjusted.reduce(function(v1, v2) { return v1 * v2; }, 1);
           return (combine - 1) * 100;
       },
       ceil : function(x, d) {
           var n = Math.pow( 10, d || 0 );
           return Math.ceil( x * n ) / n;
       },
       floor : function(x, d) {
           var n = Math.pow( 10, d || 0 );
           return Math.floor( x * n ) / n;
       },
       round : function(x, d) {
           var n = Math.pow( 10, d || 0 );
           return Math.round( x * n ) / n;
       }
   }
});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
