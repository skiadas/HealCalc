(function(define) { 'use strict';
define(function(require) {
   
   var percentIncrease = require('../../utils/math').percentIncrease
   return {
      settings : {
         // Used to set up spec-specific choices/talents
      },
      amendRatings : {
         hasteRating   : percentIncrease(5),
         baseIntellect : percentIncrease(5),
         gearIntellect : percentIncrease(5)
      },
      amendStats : function(stats) {
         // Used for post-processing of the stats. Will often do nothing to the stats
         return stats;
      },
      spellEffects : {
         "Regrowth" : {
            critChance : function(that) { return this.baseCritChance(that) + 0.6; }
         }
      }
   }

});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
