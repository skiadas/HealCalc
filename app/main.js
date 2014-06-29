(function(define) { 'use strict';
define(function(require) {

   var Spell = require('./models/spells');
   var Spec = require('./models/spec');
   var Buff = require('./models/buffs');

   var buffs = new Buff()
   var spells = Spell.computeAll({ stats : buffs.compute() });
   console.log(buffs.compute())
   console.log(spells)
   return { Spell : Spell, Spec : Spec, Buff : Buff, spells : spells }

});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
