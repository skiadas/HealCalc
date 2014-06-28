(function(define) { 'use strict';
define(function(require) {

   var Spell = require('./models/spells');
   var Spec = require('./models/spec');
   var Buff = require('./models/buffs');

   return { Spell : Spell, Spec : Spec, Buff : Buff }

});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
