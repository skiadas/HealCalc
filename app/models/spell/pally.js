(function(define) { 'use strict';
define(function(require) {

   return [
      {
         nick    : 'FlashLight',
         name    : 'Flash of Light',
         mana    : 0.23 / 5,
         ct      : 1.5,
         coef    : 1.85304 * 1.25,
         img     : 'link',
         link    : 19750,
         instant : false,
         aoe     : false
      },
      {
         nick    : 'HolyShock',
         name    : 'Holy Shock',
         mana    : 0.071 / 5,
         cd      : 6,
         ct      : 1.5,
         coef    : 1.22162 * 1.25,
         img     : 'link',
         link    : 20473,
         instant : true,
         aoe     : false
      },
      {
         nick     : 'LightOfDawn',
         name     : 'Light of Dawn',
         mana     : 0,
         ct       : 1.5,
         coef     : 0.735 * 1.5,
         ntargets : 6,
         img      : 'link',
         link     : 85222,
         instant  : true,
         aoe      : true
      },
      {
         nick     : 'HolyLight',
         name     : 'Holy Light',
         mana     : 0.115 / 5,
         ct       : 2.5,
         coef     : 1.853 * 1.25,
         img      : 'link',
         link     : 82326,
         instant  : false,
         aoe      : false
      },
      {
         nick     : 'HolyRadiance',
         name     : 'Holy Radiance',
         mana     : 0.44 / 5,
         ct       : 2.5,
         coef     : 1.5132 * 1.25,
         ntargets : 6,
         img      : 'link',
         link     : 82327,
         instant  : false,
         aoe      : true
      },
      {
         nick     : 'WordOfGlory',
         name     : 'Word of Glory',
         mana     : 0,
         ct       : 1.5,
         coef     : 0.882 * 1.5 * 3,
         img      : 'link',
         link     : 136494,
         instant  : true,
         aoe      : false
      }
   ]

});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
