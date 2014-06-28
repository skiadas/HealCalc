(function(define) { 'use strict';
define(function(require) {
   
   var mixin      = require('../utils/mixin');
   var disc       = require('./spell/Disc');
   var holy       = require('./spell/Holy');
   var shaman     = require('./spell/Shaman');
   var druid      = require('./spell/Druid');
   var pally      = require('./spell/Pally');
   var monk       = require('./spell/Monk');

   var specs = {
      disc : disc, holy : holy, shaman : shaman,
      druid : druid, pally : pally, monk : monk
   };
   
   // spec here is a string representing the desired spec
   function Spec(spec) {
      mixin(this, specs[spec]);
   }
   
   Spec.specs = specs;
   return Spec;
});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
