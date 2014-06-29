(function(define) { 'use strict';
define(function(require) {
   
   var math = require('../../utils/math');
   var percentIncrease = math.percentIncrease;
   var hasteMultiply = math.hasteMultiply;
   var masteryFactor = 1.25;


   // This is meant to replace healWithMast
   var sealInsightHeal = function(that) { return this.baseHeal(that) * 1.05; }
   var beaconedHeal = function(percent) {
      var percent = percent || 0.5; // 50% default
      return function(that) {
         return this.baseHealWithMast(that) +
                (that.stats.beacon ? this.heal(that) * percent : 0);
      }
   }


   return {
      settings : {
         // Used to set up spec-specific choices/talents
      },
      amendRatings : {
         criticalRating : percentIncrease(5),   // Critical Strike Atunement
         baseIntellect  : percentIncrease(5),
         gearIntellect  : percentIncrease(5)
      },
      amendStats : function(stats) {
         // Used for post-processing of the stats. Will often do nothing to the stats
         stats.masteryPercent = stats.mastery * masteryFactor;
         stats.haste = hasteMultiply(stats.haste, 1.1);   // Pallies get 10% passive haste
         return stats;
      },
      spellEffects : {
         'FlashLight' : {
            healWithMast : beaconedHeal(0.5),
            heal : sealInsightHeal
         },
         'HolyShock' : {
            healWithMast : beaconedHeal(0.5),
            heal : sealInsightHeal
         },
         'LightOfDawn' : {
            healWithMast : beaconedHeal(0.5),
            heal : sealInsightHeal
         },
         'HolyLight' : {
            healWithMast : beaconedHeal(0.5),
            heal : sealInsightHeal
         },
         'HolyRadiance' : {
            healWithMast : beaconedHeal(0.5),
            heal : sealInsightHeal,
            ntargets : function(that) { return 1 + 5/2; } // To account for half-healing on nonmain
         },
         'WordOfGlory' : {
            healWithMast : beaconedHeal(0.5),
            heal : sealInsightHeal
         }
      }
   }

});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
