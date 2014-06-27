(function(define) { 'use strict';
define(function(require) {

   var math       = require('../utils/math');
   var mixin      = require('../utils/mixin');
   var disc       = require('./spellsDisc');
   var holy       = require('./spellsHoly');
   var shaman     = require('./spellsShaman');
   var druid      = require('./spellsDruid');
   var pally      = require('./spellsPally');
   var monk       = require('./spellsMonk');

   var floor = math.floor;
   var round = math.round;
   var max   = Math.max;
   
   // These are the pure spell values
   var allSpells = {
      disc  : disc , holy  : holy , shaman : shaman,
      druid : druid, pally : pally, monk   : monk
   }

   // Basic spell constructor. All spells start with that, then specialize
   function Spell(obj) {
      this.params = obj;
   }
   
   // Base implementations of the various spells. 
   // Every spell computation expects to be called with an argument "that" which is an object
   // containing the following properties:
   //       stats : Giving access to general stat info
   //       spec  : Giving access to spec info
   // Every spell method is expected to be called with the "this" object set to the spell object itself.
   //
   // Prototype methods come in two forms. Those prefixed with "base" are not meant to change, so that they
   // are available to anyone overwriting methods.
   // Those not prefixed with "base" are "default" implementations of the methods, meant to be overwritten
   // by specs.
   Spell.prototype = {
      baseMana : function(that) { return this.params.mana * that.stats.mana; },
      baseBasicHeal : function(that) {
         return this.params.coef * that.stats.spellpower * this.ntargets(that);
      },
      baseNtargets : function(that) { return this.params.ntargets || 1; },
      baseTimeTick : function(that) {
         return floor( this.params.timeTick / (1 + that.stats.haste) + 0.0005, 3 );
      },
      baseNticks : function(that) {
         return round( this.params.nticks * this.params.timeTick / this.timeTick(that) );
      },
      baseDot : function(that) { return this.baseHeal(that) * this.nticks(that); },
      baseHeal : function(that) { return this.params.nticks ? this.dot(that) : this.basicHeal(that); },
      baseHealWithMast : function(that) { return this.heal(that) * this.stats.masteryPercent / 100; },
      baseCritChance : function(that) { return this.param.critical / 100; },
      baseCritHeal : function(that) { return this.healWithMast(that) * 2; },
      baseAvgHeal  : function(that) {
         var C = this.critChance(that); 
         return (1-C) * this.healWithMast(that) + C * this.critHeal(that);
      },
       // Base cooldown is the cast time unless otherwise specified
      baseCooldown : function(that) { return max(this.params.cd, this.ct(that)); },
      // These just turn around and call the base spells. Individual spells will overwrite
      // Methods for individual spells will still have access to base.
      mana         : function(that) { return this.baseMana(that); },
      basicHeal    : function(that) { return this.baseBasicHeal(that); },
      ntargets     : function(that) { return this.baseNtargets(that); },
      timeTick     : function(that) { return this.baseTimeTick(that); },
      nticks       : function(that) { return this.baseNticks(that); },
      dot          : function(that) { return this.baseDot(that); },
      heal         : function(that) { return this.baseHeal(that); },
      healWithMast : function(that) { return this.baseHealWithMast(that); },
      critChance   : function(that) { return this.baseCritChance(that); },
      critHeal     : function(that) { return this.baseCritHeal(that); },  // The total amount of a critted heal
      avgHeal      : function(that) { return this.baseAvgHeal(that); },
      // The following are computing basic values based on the heal amount
      // In theory there should be no need for overwriting most/any of them
      ct    : function(that) { return max (this.params.ct / that.stats.haste, 1); },
      cd    : function(that) { return this.baseCooldown(that); }, // Cooldown, in seconds
      cpm   : function(that) { return 60 / this.cd(that); },      // Casts per minute
      hps   : function(that) { return this.avgHeal(that) / this.cd(that); }, // Healing per cooldown
      hpct  : function(that) { return this.avgHeal(that) / this.ct(that); }, // Healing per cast time
      hpm   : function(that) { return this.avgHeal(that) / this.mana(that); }, // Healing per mana
      mps   : function(that) { return this.mana(that) / this.ct(that); },   // Mana per second
      mpm   : function(that) { return this.mana(that) * this.cpm(that); },  // Mana per minute
      
      // Computes and returns an object of pertinent values
      compute      : function(that) {
         
      }
   }

   return allSpells;   // FIXME
   return Spell;
});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
