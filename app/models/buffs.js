(function(define) { 'use strict';
define(function(require) {

   var mixin = require('../utils/mixin');
   var hasteMultiply = require('../utils/math').hasteMultiply;
   var Spec = require('./spec');

   var defaultSettings = {
      baseIntellect       : 293,
      gearIntellect       : 874,
      weaponSpellpower    : 313,
      baseSpirit          : 220,
      gearSpirit          : 0,
      criticalRating      : 76,
      hasteRating         : 234,
      masteryRating       : 254,
      buffStats           : true, // 5%
      buffSpellpower      : true, // 10%
      buffCritical        : true, // 5%
      buffMastery         : true, // 458???
      buffHaste           : true, // 5%  (and multistrike?)
      mana                : 37000,
      level               : 90
   }

   var convs = {
      critical : 1 / 23,     // critRating to crit
      haste    : 1 / 16,
      mastery  : 1 / 23     // This is before taking into account spec-mastery coefficient
   }

   function Buffs(settings) {
      return mixin(this, defaultSettings, settings);
   }

   Buffs.prototype = {
      // This computes effects as if those base stats will not be further modified
      // Specs that affect base stats must first clone the object, then adjust the stats
      // and then have it compute with the adjusted stats.
      compute : function compute() {
         var intellect  = (this.baseIntellect + this.gearIntellect) * 1.05 *
                           (this.buffStats ? 1.05 : 1);
         var spellpower = (intellect + this.weaponSpellpower) * (this.buffSpellpower ? 1.1 : 1);
         var spirit     = this.baseSpirit + this.gearSpirit;
         var critical   = this.criticalRating * convs.critical + 6 + (this.buffCritical ? 5 : 0);
         var mastery    = (this.masteryRating + (this.buffMastery ? 118 : 0)) * convs.mastery + 8;
         var haste      = this.hasteRating * convs.haste;
         var adjustedHaste = (this.buffHaste ? hasteMultiply(haste, 5) : haste);

         return {
            mana           : this.mana,
            intellect      : intellect,
            spellpower     : spellpower,
            spirit         : spirit,
            critical       : critical,
            mastery        : mastery,
            haste          : adjustedHaste,
            masteryPercent : mastery * 1.25  // Needs to be overwritten by spec
         }
      },
      // Clones a stat/buff object, optionally amending any values in it
      clone : function clone(amend) {
         var cloned = new Buffs(this);
         for (k in amend) {
            if (amend.hasOwnProperty(k)) {
                // amend is meant to be an object with methods
                // For any stats that need amending (e.g. the base 5% int bonus)
               cloned[k] = amend[k](cloned[k]);
            }
         }
         return cloned;
      },
      specialize : function specialize(spec) {
         return this.clone(spec.amendRatings);
      },
      getStats : function getStats(spec) {
         return spec.amendStats(this.specialize(spec).compute())
      }
   }

   return Buffs;

});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
