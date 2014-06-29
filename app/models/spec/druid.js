(function(define) { 'use strict';
define(function(require) {
   
   var percentIncrease = require('../../utils/math').percentIncrease
   var masteryFactor = 1.25;
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
         // Except for mastery
         stats.masteryPercent = stats.mastery * masteryFactor;
         return stats;
      },
      spellEffects : {
         // Living seed only on base heal, and does not benefit further from mastery
         "HealingTouch" : {
            critHeal : function(that) { return this.critBasicHeal(that) * 1.3; }
         },
         "Regrowth" : {
            basicHeal : function(that) { return 79 + this.params.coef * that.stats.spellpower; },
            critChance : function(that) { return this.baseCritChance(that) + 0.6; },
            healWithMast : function(that) { return this.hotWithMast(that) + this.basicHealWithMast(that); },
            critHeal : function(that) {
               return this.critHot(that) + this.critBasicHeal(that) * 1.3;
            },
            avgHeal : function(that) {
               var C = this.baseCritChance(that);
               return this.baseAvgHeal(that) -   // This is computed with the increased crit chance
                      this.critHot(that) * 0.6; // Need to remove the extra criting of dots
            }
         },
         "Lifebloom" : {
            heal : function(that) { return this.hot(that) + this.basicHeal(that); }
         },
         "Rejuv" : {
            heal : function(that) { return this.hot(that) + this.basicHeal(that); }
         },
         "Tranq" : {
            nticks : function(that) { return this.params.nticks; }
         }
      }
   }

});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
