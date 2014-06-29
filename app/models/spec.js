(function(define) { 'use strict';
define(function(require) {
   
   var mixin      = require('../utils/mixin');
   var disc       = require('./spec/disc');
   var holy       = require('./spec/holy');
   var shaman     = require('./spec/shaman');
   var druid      = require('./spec/druid');
   var pally      = require('./spec/pally');
   var monk       = require('./spec/monk');

   var specs = {
      disc : disc, holy : holy, shaman : shaman,
      druid : druid, pally : pally, monk : monk
   };
   
   // spec here is a string representing the desired spec
   function Spec(spec) {
      mixin(this, specs[spec]);
   }
   
   Spec.specs = specs;
   Spec.allSpecs = function() {
      var ret = {};
      for (var spec in specs) {
         if (specs.hasOwnProperty(spec)) {
            ret[spec] = new Spec(spec);
         }
      }
      return ret;
   }
   return Spec;
});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
